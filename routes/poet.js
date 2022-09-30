var express = require('express')
var router = express.Router()
const response = require('../model/response-format/index')
const {getPoetCoors} = require('../controller/poet')


/**
 * 根据诗人名获取所经过点坐标
 */
/*router.get('/getPoetCoors',function (req,res,next) {
    try {
        const {poetName} = req.query
        let getRes = getPoetCoors(poetName)
        console.log(getRes)
        response.responseSuccess(getRes,res)

    }catch (e) {
       console.log('/poet/getPoetCoors',e.message)
        response.responseFailed(res)
    }
})*/
router.get('/getPoetCoors',getPoetCoors)

router.get('/getPoetCoors1',getPoetCoors)

module.exports = router;