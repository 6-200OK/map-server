const Poet = require('../model/db-model/poet')
const db = require('../config/db')

module.exports = {
    //批量增加数据
     async addPoets(poets) {
         try {
             await Poet.sync()
             await Poet.bulkCreate(poets);
             console.log("添加成功")
         } catch (e){
             console.log("添加失败\n"+e);
         }
    },
    //获取诗人所经过点坐标
/*    async getPoetCoors(poetName){
         try {
             const coors = await Poet.findAll({
                 attributes:['poet','Latitude','Longitude','Title','year'],
                 where:{
                     poet:poetName
                 }
             })
             console.log(coors)
             return coors;
         }catch (e) {
             console.log(e)
         }
    }*/
    getPoetCoors(req,res){
        const {poetName} = req.query
        return Poet.findAll({
            attributes:['poet','Latitude','Longitude','Title','year'],
            where:{
                poet:poetName
            }
        }).then((coors) => res.status(200).send(coors))
            .catch((error) => res.status(400).send(error))
    },
    //分页查询
    getPoetCoorsList(req,res){
        const {poetName,page = 1,pageSize = 10} = req.query
        return Poet.findAndCountAll({
            attributes:['poet','Latitude','Longitude','Title','year'],
            where:{
                poet:poetName
            },
            offset: (page-1)*pageSize,
            limit:pageSize
        }).then((coors) => res.status(200).send(coors))
            .catch((error) => res.status(400).send(error))
    },

    async getPoetCoors1(req,res) {
        try {
            const {poetName} =req.query
            const coors = await Poet.findAll({
                attributes:['poet','Latitude','Longitude','Title','year'],
                where:{
                    poet:poetName
                }
            })
            return res.status(200).send(coors);
        }catch (e) {
            return res.status(400).send(e);
        }
    }
}