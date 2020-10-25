var player = {
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
    moveEast: function (){
        var yCord = player.location()[0]
        var xCord = player.location()[1]
        playerTrack[yCord][xCord+1] = player
        playerTrack[yCord][xCord] = null
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
