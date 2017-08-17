module.exports = {
    postgressql: {
        database:process.env.LT_DB_DATABASE,
        username:process.env.LT_DB_USERNAME,
        password:process.env.LT_DB_PASSWORD,
        host:process.env.LT_DB_HOST,
        port:process.env.LT_DB_PORT
    },
    mssql: {
      dialect: "mssql",
      host: "drongeic.mx",
      username:"developer",
      password:"Comisi0n123",
      database:"mobilidad",
      port:1433,
      dialectOptions:{
        "instanceName": "DRONES",
        "encrypt": false
      },
      timezone:'-05:00'
  }
}