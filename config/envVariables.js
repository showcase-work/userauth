module.exports = {
    postgressql: {
        database:process.env.LT_DB_DATABASE,
        username:process.env.LT_DB_USERNAME,
        password:process.env.LT_DB_PASSWORD,
        host:process.env.LT_DB_HOST,
        port:process.env.LT_DB_PORT
    }
}