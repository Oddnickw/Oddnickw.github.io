function secondHandSubmit(command){
	
	//Get rid of special characters/multiple spaces, split the command into words
    command = command.replace("  ", " ");
    command = command.toLowerCase();
    words = command.split(" ");
	//If the first word is a valid command, trigger the associated function
    if(commands[words[0]]){
        var op = commands[words.shift()];
        op.trigger(words);
    }
}
class gameObject{
    constructor(name, description, canPickUp, useFunction, lookDescription,comboUse,picture){
        this.name = name 
        this.description = description
        this.canPickUp = canPickUp
        this.useFunction=useFunction
        this.lookDescription = lookDescription
        this.comboUse = comboUse
        this.picture = picture
    }
     
    displayObject(){
        println(this.name)
        println(this.description)
    }



    getName(){
        return this.name
    }
    
    getDescription(){
        return this.description
    }

    getLook(){
        if (this.picture != null){
            console.log(this.picture)
            printImage(this.picture)
            println(this.lookDescription)
        }else{
            console.log("no")
            println (this.lookDescription)
        }
        
    }

    comboFail(){
        println ("you cannot use " + secondItem.name + " on " + this.name + ".")
    }

}

class gimicObject extends gameObject{
    constructor(name, description, canPickUp, useFunction,useDescription, lookDescription, comboUse){
        super(name,description,canPickUp,useFunction,lookDescription,comboUse)  
        this.useDescription = useDescription
    }
    getUseDescription(){
        return this.useDescription
    }
    
}


var rustyNail = new gimicObject(
    "rusty nail",//name
    "a Rusty Nail",//description
    true,//canPickUp if you can set to true, otherwise put a discription of why...
    null,
    "You cannot think of a use for a broken rusted nail...",//maybe gimic useDescription
    "It is an old broken nail, entirely useless.",
    null,
    function comboUse(secondItem){
        "There is nothing you can do with this nail"
    }

)

var steelDoor = new gameObject(
    "steel door",//name
    "a Steel Door to the north",//description
    "This is a steel door... you cannot take it",//canPickUp if you can set to true, otherwise put a discription of why...
    function useFunction()//useFunction  
    {doorUser("north")},//
    "The door has a small fragile lock on it.",
    function comboUse(secondItem){
        if (secondItem == crowbar){
            if (northRoom().passageNLocked[0] != false){ 
                println("You try the crowbar on the door and the lock snaps and falls to the floor.")
                this.lookDescription = "This door used to have a steel lock on it. It's now broken and on the ground."
                northRoom().passageNLocked[0] = false
                printImage("lockbreakwithdoor.gif")
            }else{println("The lock is already broken.")}
        }else{this.comboFail}
    }

)

var scrapMetal = new gameObject(
    "scrap metal",//name
    "some Scrap Metal on the floor",//description
    "There is way to much metal to take",//canPickUp if you can set to true, otherwise put a discription of why...
    null,//useFunction
    "This scrap metal is old and rusted, it looks like it is of little use.",
    null
)

var crowbar = new gameObject(
    "crowbar",
    "a Crowbar",
    true,
    function useFunction(){
        println("This is a useful item but not by it self")
    },
    "The crowbar is blue and has a red top.",
    function comboUse(secondItem) {
        crowbarUses(secondItem)
    },
    "crowbar.png"
)




/* Template

    //name
    //description
    //canPickUp if you can set to true, otherwise put a discription of why...
    //useFunction
    //maybe gimic useDescription
    // detailed desc.
    // use with map
*/

//functions

function doorUser(direction){
    if(direction = "north"){
        secondHandSubmit("go north")
    }
    else if (direction = "south"){
        secondHandSubmit("go south")
    }
    else if (direction = "west"){
        secondHandSubmit("go west")
    }
    else if (direction = "east"){
        secondHandSubmit("go east")
    }
    
}
function gimicUse(object){
    console.log(object)
    println(object.useDescription)
}


function crowbarUses(secondItem){
    secondItem.comboUse(crowbar)

}


