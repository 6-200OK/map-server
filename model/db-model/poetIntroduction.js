const sequelize = require('sequelize')
const db = require('../../config/db')

const {INTEGER,STRING,TEXT} = sequelize

//定义poetIntroduction model
const PoetIntroduction = db.define(
    'poetIntroduction',
    {
        id:{
            type:INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        poet:STRING(24),
        introduction:TEXT
    }
)

module.exports = PoetIntroduction;