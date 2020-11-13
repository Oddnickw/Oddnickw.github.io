var player = {
    inventory: [],
    abilities: [],
    location : function (){
            for (let row = 0; row < playerTrack.length; row++) {
                for (let column = 0; column < playerTrack.length; column++){
                    if (playerTrack[row][column] == this){
                        return [row,column]
                    }
                }
                
            }
    },
    moveNorth : function (){
        var yCord = player.location()[0]
        var xCord = player.location()[1]
        playerTrack[yCord-1][xCord] = player
        playerTrack[yCord][xCord] = null
    },
    moveSouth : function (){
        var yCord = player.location()[0]
        var xCord = player.location()[1]
        playerTrack[yCord+1][xCord] = player
        playerTrack[yCord][xCord] = null
    },
    moveWest : function (){
        var yCord = player.location()[0]
        var xCord = player.location()[1]
        playerTrack[yCord][xCord-1] = player
        playerTrack[yCord][xCord] = null
    },
    moveEast : function (){
        var yCord = player.location()[0]
        var xCord = player.location()[1]
        playerTrack[yCord][xCord+1] = player
        playerTrack[yCord][xCord] = null
    },
    
    addItem: function(item){
        if (this.inventory.length < 6){
            if (item.canPickUp == true){
                this.inventory.push(item)
                println("You take " + words.join(" ") + ".")
            }
            else{
                println(item.canPickUp)
            }
        }
        
    },

    dropItem(slot){
        this.inventory[slot] = " "
        this.inventory = this.inventory.filter(function(str) {
            return /\S/.test(str);
        });
    },

    displayInventory: function(){
        console.log(this.inventory)
        if (this.inventory.length == 0){
            println("You have nothing... I'm sorry.")
        }
        else{
            var viewItems = []
            for (let pusher = 0; pusher < this.inventory.length-1; pusher++) {
                viewItems.push(this.inventory[pusher].name);
            }
            if (this.inventory.length > 1){viewItems.push("and " + this.inventory[this.inventory.length-1].name + ".")}
            else{viewItems.push("a "+this.inventory[0].name)}
            console.log(this.inventory)
            println("You have " + viewItems.join(", "))
            }
    }
}




//player tracker 

function currentRoom(){
    var yCord = player.location()[0]
    var xCord = player.location()[1]
    return map[yCord][xCord]
}

function northRoom(){
    var yCord = player.location()[0] - 1
    var xCord = player.location()[1]
    return map[yCord][xCord]
}
function southRoom(){
    var yCord = player.location()[0] + 1
    var xCord = player.location()[1]
    return map[yCord][xCord]
}
function westRoom(){
    var yCord = player.location()[0]
    var xCord = player.location()[1] - 1
    return map[yCord][xCord]
}
function eastRoom(){
    var yCord = player.location()[0]
    var xCord = player.location()[1] + 1
    return map[yCord][xCord]
}


function roomUnpacker(){
    currentRoom().displayRoom()
}


var playerTrack = new Array(playerTrack)
playerTrack = [
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,player,null,null],
]
