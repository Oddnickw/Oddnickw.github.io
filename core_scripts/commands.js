commands = {
    go: {
        description: "Go <br>Input Go and then the direction you wish to travel. If you cannot move that way it will inform you of such!",
        trigger: function(words){
            console.log(words)
            if (words == "north"){
                console.log(northRoom().passageNLocked[0])
                if (northRoom().passageNLocked[0] = false ){    
                if (player.location()[0] != 0){
                        if (northRoom() != null){
                            player.moveNorth()
                            roomUnpacker()
                        }
                        else{
                            println("There is no room to the North.")
                        }
                    }
                    else{ println("there is no room to the North")}
                
                }
                else{println(northRoom().passageNLocked.description)}
            }
            else if (words == "south"){
                if (player.location()[0] != 4){
                    if (southRoom() != null){
                        player.moveSouth()
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
                    result+= "<p>"+commands[key].description+"</p>";
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
};