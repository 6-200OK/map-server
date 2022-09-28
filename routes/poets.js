const Poet = require('../model/poet')
const {addPoets} = require('../controller/poet')

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

addPoets(markers).then(r => console.log(r))

