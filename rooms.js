
class Room{
    constructor(name, description,exits, location, items ,passageN,passageS,passageW,passageE,passageNLocked,passageSLocked,passageWLocked,passageELocked){
        this.name = name
        this.description = description
        this.exits = exits
        this.location = location
        this.items = items
        this.passageN = passageN
        this.passageS = passageS
        this.passageW = passageW
        this.passageE = passageE
        this.passageNLocked = passageNLocked // puzzle object goes here 
        this.passageSLocked = passageSLocked // puzzle object goes here
        this.passageWLocked = passageWLocked// puzzle object goes here
        this.passageELocked = passageELocked// puzzle object goes here
    }
    displayRoom(){
        println(this.description )
        var lat =  this.getRoomLocation()[0]
        var long = this.getRoomLocation()[1]
        console.log(lat)
        console.log(long)
        if (lat !=0) { 
            if ( map[lat - 1][long] != null){
                if (map[lat - 1][long].passageN != null){
                println (map[lat - 1][long].passageN)
                }
            }
        }
        if (lat !=4) {
            if ( map[lat + 1][long] != null){
            if (map[lat + 1][long].passageS != null){
                println (map[lat + 1][long].passageS)
                }
            }
            }
        if (long != 0) {
            if (map[lat][long-1] != null){
                if (map[lat][long-1].passageW != null){
                println (map[lat][long -1 ].passageW)
                }
            } 
        }
        if (long != 4) {
            if (map[lat][long+1] != null){
                if (map[lat][long+1].passageE != null ){
                println (map[lat][long + 1].passageE)
                }
            }
        }
        
        var viewItems = []
        
        for (let pusher = 1; pusher < this.items.length-1; pusher++) {
            viewItems.push(this.items[pusher]);
        }
        viewItems.push("and " + this.items[this.items.length-1] + ".")
        if (this.items[0] != false) {println("In the room you see " + viewItems.join(", "))}

    }

    getRoomLocation(){
        for (let lat = 0; lat < map.length; lat++) {
            for (let long = 0; long < map.length; long++){
                if (map[lat][long] == this){
                    return [lat,long]
                }
            }
            
        }

    }
    getTrueRoomLocation(){
        for (let lat = 0; lat < trueMap.length; lat++) {
            for (let long = 0; long < trueMap.length; long++){
                if (trueMap[lat][long] == this){
                    return [lat,long]
                }
            }
            
        }

    }

}




//starter room
var starterRoom = new Room(
    "Starting room", //name
    "This room looks like an abandon machine shop. The floor is cluttered with tools and scrap metal.", //Description
    ["north", [3,2]], // exits 
    [4,2],//location
    [true,"a rusty nail", "a steel door to the north", "some scrap metal on the floor"], //items
    null,//passage north
    "There is a cold and large steel door here",//passage south 
    null,//passage West
    null,//passage East


);

var lock = [lockOne]

var nextRoom = new Room(
    "boiler Room",//name
    "This room contains a large boiler and is full of broken chairs",//Description
    null,//exits 
    [3,2],//location
    [false],//items
    "There is a steel door leading north",//passage north
    null,//passage south
    null,//passage West
    null,//passage East
    lock[0], //passage north locked
    [false],//passage south locked
    [false],//passage West locked
    [false]//passage East locked

);

console.log(starterRoom.description);
console.log(starterRoom.exits);



var map = new Array()
map = [
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,nextRoom,null,null],
    [null,null,starterRoom,null,null],
]
console.table(map);

var trueMap = new Array()
trueMap = [
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,nextRoom,null,null],
    [null,null,starterRoom,null,null],
]


/*
Room Template:
    //name
    //Description
    //exits 
    //location
    //items
    //passage north
    //passage south
    //passage West
    //passage East
    //passage north locked
    //passage south locked
    //passage West locked
    //passage East locked

*/ 