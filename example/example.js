var alphaShape = require('../alpha')
var delaunay = require('delaunay-triangulate')
var sc = require('simplicial-complex')
var toSVG = require('planar-graph-to-svg')

var points = []
for(var i=0; i<80; ++i) {
  var theta = 2.0 * Math.PI * i / 79.0
  points.push([Math.cos(theta), Math.sin(theta)])
  points.push([2 + Math.cos(theta), Math.sin(theta)])
  points.push([2 + Math.cos(theta), 2+Math.sin(theta)])
  points.push([Math.cos(theta), 2+Math.sin(theta)])
}

var cells = alphaShape(0.5, points)

console.log(toSVG(cells, points))

//var dtcells = delaunay(points)
//console.log(toSVG(sc.skeleton(dtcells, 1), points))