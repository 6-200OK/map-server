const Sequelize = require('sequelize')

const dbConfig = {
    database: 'poetmap',
    username: 'postgres',
    password: 'Telecarto_501502511',
    host: '101.34.228.44',
    dialect: 'postgres'
}

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        //设置时区
        timezone:'+08:00',
        define: {
            timestamps: false //为模型添加 createdAt 和 updatedAt 两个时间戳字段（true or false）
        },
        pool: { //使用连接池连接，默认为true
            max: 50,
            min: 0,
            idle: 30000
        },
    }
)

module.exports = sequelize;