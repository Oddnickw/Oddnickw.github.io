commands = {
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