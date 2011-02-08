
function Character() {
    if(this instanceof Character) {
        EventEmitter.call(this)
        this.Items = {}
        this.Abilities = {}
        this.Context = {}
    }
    else {
        return new Character()    
    }
}
Character.prototype.Items = null
Character.prototype.Abilities = null
Character.prototype.Owner = null