const sequelize = require('sequelize')
const db = require('../../config/db')

const { INTEGER,STRING,DOUBLE,BOOLEAN} = sequelize
//定义一个 poet model
const Poet = db.define(
    'poets',   //表名
    {
        id:{
            type:INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        poet:STRING(24),
        centerLat:DOUBLE,
        centerLon:DOUBLE,
        zoomLevel:INTEGER,
        markerId:STRING(128),
        Latitude:DOUBLE,
        Longitude:DOUBLE,
        OffsetLeft:DOUBLE,
        OffsetTop:DOUBLE,
        Invisible:BOOLEAN,
        RegionId:STRING(48),
        Title:STRING(48)
    }
)

module.exports = Poet;