"use strict";
let Sequelize = require("sequelize");
let bcrypt = require('bcrypt-nodejs');
let SALT_WORK_FACTOR = 12;
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;
    let Company = app.models.company.Company

    var User = sequelize.define("users", {  
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
            email: {
            type: Sequelize.STRING
        },
            username: {
            type: Sequelize.STRING
        },
            company_id: {
            type: Sequelize.INTEGER
        },
            password: {
            type: Sequelize.STRING
        },
            createdAt: {
            type: Sequelize.DATE
        },
            updatedAt: {
            type: Sequelize.DATE
        }
    },
    {
        tableName: "users",
        timestamps: false,

        instanceMethods: {
            generateHash: function(password){
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            },

            validPassword: function(password){
                return bcrypt.compareSync(password, this.password);
            }

        }

    });

    User.beforeCreate(function(user, options) {
        var hashedPw = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null);
        user.password = hashedPw;
    });


    function getme(id){
            console.log("working in getme model");
            return User.findById(id);
    }

 
    function createNewuser(params){
        console.log(User);
            return User.create({username:params.username, password:params.password, email:params.email, company_id:params.company});
    }

    function getAllUsers(){
        return User.findAll({
            include:[
                {
                    model:Company
                }
            ]
        })
    }

    function deleteUser(id){
        return User.destroy({
            where:{
                id:id
            }
        })
    }

    User.belongsTo(Company,{target: 'id', foreignKey:'company_id'});


    return {
        User,
        getme,
        createNewuser,
        getAllUsers,
        deleteUser
    };
};
