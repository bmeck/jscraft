function Recipe() {    
}
//pattern in rows by column 2d array
Recipe.prototype.pattern = [
    [/*column 0, row 0*/] //row 0
]
Recipe.prototype.require = {
    //$state : function test(grid.context[$state]) -> Boolean
}
Recipe.prototype.onOutput = function(craftingGrid,character) {
        
}

function CraftingGrid() {
    this.areas = {
        input : [new Array(2),new Array(2)]
        output : [[]]
    }
}
CraftingGrid.prototype.findRecipe = function findRecipe()

function Furnace() {
    CraftingGrid.call(this)
    this.areas.fuel = [[]]
}
Furnace.prototype = new CraftingGrid()
Furnace.prototype.constructor = Furnace

Furnace.prototype.engage = function engage() {
}