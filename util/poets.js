const Poet = require('../model/db-model/poet')
const {addPoets,getPoetYear,updatePoet} = require('../controller/poet')

let {Traces} = require('../public/poets/libai')

let centerLat = Traces[0].CenterLatitude
let centerLon = Traces[0].CenterLongitude
let zoomLevel = Traces[0].ZoomLevel
let poet = Traces[0].Title.split(" ")[0]
let markers = Traces[0].Lines[0].Markers

markers.forEach(marker =>{
    marker.poet = poet;
    marker.zoomLevel = zoomLevel;
    marker.centerLat = centerLat;
    marker.centerLon = centerLon;
    marker.markerId = marker.Id;
    delete marker.Id;
})

// console.log(markers)
/**
 * 数据入库
 */
//addPoets(markers).then(r => console.log(r))

/**
 * 新增2个字段
 */
//Poet.sync({alter:true}).then(result => console.log(result)).catch(e => console.log(e))

let res = getPoetYear()

const poetStart = {
    '李白':701,
    '杜甫':712,
    '李清照':1084,
    '骆宾王':626,
    '王勃':650,
    '王昌龄':698,
    '王维':701,
    '文天祥':1236,
    '辛弃疾':1140,
    '张炎':1248,
}

res.then(result => {
    let poetYears = []
    result =JSON.parse(result)
    result.forEach(poet =>{
        let poetYear = {}
       // poetYear['poet'] = poet.poet
        poetYear['id'] = poet.id
        let ages = poet.year.split('-')
        let start = [poetStart[poet.poet]+parseInt(ages[0]),randomRange(1,7),randomRange(1,30)]
        let end = [ages[1]?(poetStart[poet.poet]+parseInt(ages[1])):(poetStart[poet.poet]+parseInt(ages[0])),randomRange(8,12),randomRange(1,30)]
        poetYear['start'] = start
        poetYear['end'] = end
        poetYears.push(poetYear)
    })
    updatePoet(poetYears).then(result => console.log(result))
})

/**
 * 随机生成整数
 */
function randomRange(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}