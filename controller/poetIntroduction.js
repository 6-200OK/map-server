const PoetIntroduction = require('../model/db-model/poetIntroduction')

module.exports = {
    //单条添加数据
   addPoetIntroduction(poetIntroduction){
      return PoetIntroduction.create(poetIntroduction).then(result => console.log(result) )
               .catch(e => console.log(e))
   },
   //获取诗人introduction
   getPoetIntroduction(req,res){
      const {poetName} = req.query
      return PoetIntroduction.findAll({
         attributes:['poet','introduction'],
         where:{
            poet:poetName
         }
      }).then(result => res.status(200).send(result))
          .catch(e => res.status(400).send(e))
   },
}