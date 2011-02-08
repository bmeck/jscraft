function VoxelType() {
    
}

//A default Voxel
var VoidVoxel = new VoxelType()

function Voxel() {}
Voxel.prototype.x = 0
Voxel.prototype.y = 0
Voxel.prototype.z = 0
Voxel.prototype.type = VoidVoxel
Voxel.prototype.context = null
Voxel.prototype.world = null
