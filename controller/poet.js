const Poet = require('../model/poet')
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
    }
}