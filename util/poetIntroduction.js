const {addPoetIntroduction} = require('../controller/poetIntroduction')

let {Introduction,Traces} = require('../public/poets/other/zhangyan')

let poet = Traces[0].Title.split(" ")[0]
let introduction = Introduction[0]
let poetIntroduction = {
    poet,
    introduction
}
/**
 * poetIntroduction数据入库
 */
addPoetIntroduction(poetIntroduction)