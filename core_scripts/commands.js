commands = {
    i:{
        description: false,
        trigger:function(word) {
            secondHandSubmit("inventory")
        }
    },
    
    inv:{
        description: false,
        trigger:function(word) {
            secondHandSubmit("inventory")
        }
    },
    grab:{
        description: false,
        trigger:function(word){
            words = words.join(" ")
            input = "take " + words
            console.log(input)
            secondHandSubmit(input)
        }  
    },
    pick:{
        description: false,
        trigger:function(word){
            words.shift()
            words = words.join(" ")
            input = "take " + words
            console.log(input)
            secondHandSubmit(input)
        }
    },
    drop: {
        description:"Drop <br> Type this to drop an item onto the floor",
        trigger:function(words){
            words = words.join(" ")
            var itemNames = []
            for (let index = 0; index < player.inventory.length; index++) {
                itemNames.push(player.inventory[index].getName())
            }
            console.log(itemNames)
            if (itemNames.indexOf(words) != -1){
                slot = itemNames.indexOf(words)
                currentRoom().addItem(player.inventory[slot])
                player.dropItem(slot)
                if (currentRoom().items[0] == false){currentRoom().items[0] = true}
                println("You drop " + words)

        }

        }
    },
    inventory:{
        description:"Inventory <br> Type inventory, inv, or i to see what you are carrying.",
        trigger:function(words){
            player.displayInventory()
        }


    },
    take:{
        description:"Take <br> Type take, grab, or pick up to take an object into your invetory",
        trigger:function(words){
            words = words.join(" ")
            var itemNames = []
            for (let index = 1; index < currentRoom().items.length; index++) {
                itemNames.push(currentRoom().items[index].getName())
            }
            console.log(itemNames)
            if (itemNames.indexOf(words) != -1){
                slot = itemNames.indexOf(words) + 1
                player.addItem(currentRoom().items[slot])
                if (currentRoom().items[slot].canPickUp ==true){
                    currentRoom().removeItem(slot)
                }
                if (currentRoom().items.length == 1){currentRoom().items[0] = false}
            

        }else{println("There is no " + words + " to take!")}


    }
   },
    
    
    
    
    look:{
        description:"Look <br> Type look followed by an object to get a closer look. If you leave it blank it will reprint the room description.",
        trigger:function(words){
            words = words.join(" ")
            var itemNames = []
            for (let index = 1; index < currentRoom().items.length; index++) {
                itemNames.push(currentRoom().items[index].getName())
            }
            var inventoryList = []
                for (let finder = 0; finder < player.inventory.length; finder++) {
                    inventoryList.push(player.inventory[finder].getName())
                }
            console.log(itemNames)
            if (itemNames.indexOf(words) != -1){
                slot = itemNames.indexOf(words) + 1
                currentRoom().items[slot].getLook()
            
            
            }else if(inventoryList.indexOf(words) != -1){
                slot = inventoryList.indexOf(words)
                player.inventory[slot].getLook()
            }
            else if (words == ""){
                roomUnpacker()
            }else{
                println("You don't see " + words + " here or on you.")
            }
        }


    },

    use: {
        description: "Use <br> Type use followed by an object in the room to attempt to use it. If you type \" use object on object \" you will attempt to use the first object on the second.",
        trigger: function(words){
            if (words.indexOf("on") == -1){
                words = words.join(" ")
                var itemNames = []
                for (let index = 1; index < currentRoom().items.length; index++) {
                    itemNames.push(currentRoom().items[index].getName())
                }
                var inventoryList = []
                for (let finder = 0; finder < player.inventory.length; finder++) {
                    inventoryList.push(player.inventory[finder].getName())
                }
                console.log(itemNames)
                if (itemNames.indexOf(words) != -1 || inventoryList.indexOf(words) != -1){
                    var slot = itemNames.indexOf(words) + 1
                    var inventorySlot = inventoryList.indexOf(words)
                    if (currentRoom().items[slot] == player.inventory[inventorySlot]){
                        
                        item = player.inventory[inventorySlot]
                    }else if (currentRoom().items[slot].name == words){
                        console.log("yee")
                        item = currentRoom().items[slot]
                    }else{
                        item = player.inventory[inventorySlot]
                        console.log("purple")
                    }
                    
                    if(item instanceof gimicObject){ //plz fix
                        println(item.getUseDescription())
                    }
                    else{
                        item.useFunction()
                    }
                }
                else if (words == "door"){
                    println("So, ya wanna use a door? Which one? Buco...")
                }
                
                else{
                    println ("there is no " + words + " in this room" + " <br> Try looking for the capitalized words in the description!")
                }
            }else{
                var divider = words.indexOf("on")
                firstItem = words.slice(0,divider)
                secondItem =words.slice(divider+1,)
                firstItem = firstItem.join(" ")
                secondItem = secondItem.join(" ")
                console.log(firstItem)
                console.log(secondItem)
                
                    var firstItemNames = []
                    for (let index = 1; index < currentRoom().items.length; index++) {
                        firstItemNames.push(currentRoom().items[index].getName())
                    }
                    var firstInventoryList = []
                    for (let finder = 0; finder < player.inventory.length; finder++) {
                        firstInventoryList.push(player.inventory[finder].getName())
                    }
                   
                    if (firstItemNames.indexOf(firstItem) != -1 || firstInventoryList.indexOf(firstItem) != -1){
                        console.log("wee")
                        var firstItemPresent = true
                    }
                
                    var secondItemNames = []
                    
                    for (let index = 1; index < currentRoom().items.length; index++) {
                        secondItemNames.push(currentRoom().items[index].getName())
                    }
                    var secondInventoryList = []
                    for (let finder = 0; finder < player.inventory.length; finder++) {
                        secondInventoryList.push(player.inventory[finder].getName())
                    }

                    if (secondItemNames.indexOf(secondItem) != -1 || secondInventoryList.indexOf(secondItem) != -1){
                        console.log("wee")
                        var secondItemPresent = true
                    }
                if (firstItemPresent == true && secondItemPresent == true){
                    console.log("yee yee")
                    
                    if (firstItemNames.indexOf(firstItem) != -1 || firstInventoryList.indexOf(firstItem) != -1){
                        var slot = firstItemNames.indexOf(firstItem) + 1
                        var inventorySlot = firstInventoryList.indexOf(firstItem)
                        if (currentRoom().items[slot] == player.inventory[inventorySlot]){
                            
                            firstItem = player.inventory[inventorySlot]
                        }else if (currentRoom().items[slot].name == firstItem){
                            console.log("yee")
                            firstItem = currentRoom().items[slot]
                        }else{
                            firstItem = player.inventory[inventorySlot]
                            console.log("purple")
                        }
                    if (secondItemNames.indexOf(secondItem) != -1 || secondInventoryList.indexOf(secondItem) != -1){
                        var slot = secondItemNames.indexOf(secondItem) + 1
                        var inventorySlot = secondInventoryList.indexOf(secondItem)
                        if (currentRoom().items[slot] == player.inventory[inventorySlot]){
                            
                            secondItem = player.inventory[inventorySlot]
                        }else if (currentRoom().items[slot].name == secondItem){
                            console.log("yee")
                            secondItem = currentRoom().items[slot]
                        }else{
                            secondItem = player.inventory[inventorySlot]
                            console.log("purple")
                        }
                    console.log(firstItem)
                    console.log(secondItem)
                    firstItem.comboUse(secondItem)
                }else{
                    println("One of those two objects is not usable. Make sure they are in the room or your inventory!")
                }
            }
        }else{
            println("One of those two objects is not usable. Make sure they are in the room or your inventory!")
        }
    }

    }  
    },

    go: {
        description: "Go <br>Input Go and then the direction you wish to travel. If you cannot move that way it will inform you of such!",
        trigger: function(words){
            console.log(words)
            if (words == "north"){
                console.log(northRoom().passageNLocked[0])
                if (northRoom().passageNLocked[0] == false ){    
                    console.log("door not locked")
                    if (player.location()[0] != 0){
                        console.log("player is in a good spot")
                        if (northRoom() != null){
                            console.log("there is a room")
                            player.moveNorth()
                            console.log(currentRoom())
                            roomUnpacker()
                        }
                        else{
                            println("There is no room to the North.")
                        }
                    }
                    else{ println("there is no room to the North")}
                
                }
                else{northRoom().passageNLocked[0].getDescription()}
            }
            else if (words == "south"){
                if (player.location()[0] != 4){
                    if (southRoom() != null){
                        player.moveSouth()
                        console.log(currentRoom())
                        roomUnpacker()
                    }
                    else{
                        println("There is no room to the South.")
                    }
                    
                }
                else{ println("there is no room to the South")}
                
            }
            else if (words == "west"){
                if (player.location()[1] != 0){
                    if (westRoom() != null){
                        player.moveWest()
                        console.log(currentRoom())
                        roomUnpacker()
                    }
                    else{
                        println("There is no room to the West.")
                    }
                }
                else{ println("there is no room to the West")}
            }
            else if (words == "east"){
                if (player.location()[1] != 4){
                    if (eastRoom() != null){
                        player.moveEast()
                        console.log(currentRoom())
                        roomUnpacker()
                    }
                
                else{
                    println("There is no room to the East.")
                }
                }
                else{ println("there is no room to the East")}
            }
            else if (words == ""){
                println ("you most go in a direction.")
            }
            else {
                println("You cannot go " + words.join("🍈") + ".")
            }
        }

    },

    help: {
        description: "help x<br>Prints description of given command x.<br><br>help names<br>Prints list of commands.<br><br>help<br>Prints all commands with descriptions.",
        trigger: function(words){
            if(!words.length){
                let result = "";
                for(let key in commands){
                    if (commands[key].description != false){
                    result+= "<p>"+commands[key].description+"</p>";
                    }
                }
                println(result);
            }
            else if(words[0] == "names"){
                let result = "";
                for(let key in commands){
                    result+= key+" ";
                }
                println(result);
            }
            else if(commands[words[0]]){
                println("<p>"+commands[words[0]].description+"</p>");
            }
        }
    }
}