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
    constructor(name, description, canPickUp, useFunction, lookDescription){
        this.name = name 
        this.description = description
        this.canPickUp = canPickUp
        this.useFunction=useFunction
        this.lookDescription = lookDescription

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
        return this.lookDescription
    }

}

class gimicObject extends gameObject{
    constructor(name, description, canPickUp, useFunction,useDescription, lookDescription){
        super(name,description,canPickUp,useFunction,lookDescription)  
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
    "It is an old broken nail, entirely useless."

)

var steelDoor = new gameObject(
    "steel door",//name
    "a Steel Door to the north",//description
    "This is a steel door... you cannot take it",//canPickUp if you can set to true, otherwise put a discription of why...
    function useFunction()//useFunction  
    {doorUser("north")},
    "The door has a small fragile lock on it."

)

var scrapMetal = new gameObject(
    "scrap metal",//name
    "some Scrap Metal on the floor",//description
    "There is way to much metal to take",//canPickUp if you can set to true, otherwise put a discription of why...
    null,//useFunction
    "This scrap metal is old and rusted, it looks like it is of little use."
)





/* Template

    //name
    //description
    //canPickUp if you can set to true, otherwise put a discription of why...
    //useFunction
    //maybe gimic useDescription
    // detailed desc.
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
