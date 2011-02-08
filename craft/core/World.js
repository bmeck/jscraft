//0,0,0 is bottom south west most corner
//width, 0, 0 is bottom south east most corner
//width, depth, 0 is bottom north east most corner
//width, depth, height is top north east most corner
var voxel = require("./Voxel")
function World(options) {
    var height = this.height = options.height
    var width = this.width = options.width
    var depth - this.depth = options.depth
    //allocation
    var voxels = this.voxels = new Array(width)
    for(var i = 0; i < width; i++) {
        //a vertical slice with a width of one and all the depth and height of the world
        var slice = voxels[i] = new Array(depth)
        for(var ii = 0; ii < depth; ii++) {
            var column = slice[ii] = new Array(height)
        }
    }
    //population
    for(var i = 0; i < height; i++) {
        for(var ii = 0; ii < depth; ii++) {
            for(var iii = 0; iii < width; iii++) {
                var block = column[iii] = options.generator.terrain(this,iii,ii,i)  
                block.x = ii
                block.y = iii
                block.z = i
                block.world = this
            }
        }
    }
}