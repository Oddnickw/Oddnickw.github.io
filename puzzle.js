class puzzle {
    constructor(name,description,solution,solved){
        this.name = name
        this.description=description
        this.solution = solution
        this.solved= solved // always created as false changed to true by solved()
    }
}


var lockOne = new puzzle(
"locked steel door", //name
"You try the door but its locked...", //description
null, //solution
false // solved
    
)

/*
Template 
    //name
    //solution
    //solved



*/