var previousCommands = {
    vals: [],
    index: -1,
    up: function(){
        if(this.index < this.vals.length - 1){
            return this.vals[++this.index];
        }else{
            return "";
        }
    }
};

window.onload = function(){
    printImage("DeathintheFuture.png")
    
    roomUnpacker()
    document.querySelector("#command").onkeypress = function(e){
        
		//If specialKey remains true, cancel its regular action
        var specialKey = true;
		
        switch(e.keyCode){
			//Keypress was enter, submit, clear, and cancel regular enter action.
            case 13:
                submit(document.querySelector("#command").value);
                previousCommands.vals.push(document.querySelector("#command").value );
                document.querySelector("#command").value = "";
                break;
            default:
                specialKey = false;
        }
        
        if(specialKey)e.preventDefault();
        
    };
    
};

//thanks https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
 
function submit(command){
	
	//Get rid of special characters/multiple spaces, split the command into words
    command = escapeHtml(command);
    command = command.replace("  ", " ");
    command = command.toLowerCase();
    words = command.split(" ");
	console.log(words)
	//Print command onto the screen and a line
    println("> " + span("echoCommand", command));
	println("<hr>", true);	
	
	//If the first word is a valid command, trigger the associated function
    if(commands[words[0]]){
        var op = commands[words.shift()];
        op.trigger(words);
    }
	
	else{
        println("Command '"+words[0]+"' not found. Enter 'help' for a list of commands.")
    }
}



function capitalize(string){
    return string.charAt(0).toUpperCase() + string.substring(1);
}

function span(name, text){
    return "<span class='"+name+"'>"+text+"</span>";
}

function println(line, dontPrintPTags){
	line = dontPrintPTags ? line : "<p>"+line+"</p>"
    document.querySelector("#results").innerHTML += (line);
    scrollToBottom();
}

function printImage(src, additionalOptions){
    imagePool = "assets/imagepool/"
    src = imagePool + src 
	println("<img onload='scrollToBottom()' src='"+src+"' "+additionalOptions+">");
}

function scrollToBottom(){
    document.querySelector("#results").scrollTop = document.querySelector("#results").scrollHeight;
}

function camelCaseToWords(string){
    string = string.replace(/[A-Z]/g, " $&");
    return string.charAt(0).toUpperCase() + string.substring(1);
}

//Returns a table based on arguments
//example use: generateTable([row1col1, row1col2], [row2col1, row2col2])
function generateTable(){
    var html = "<table class='generatedTable'>";
    Array.from(arguments).forEach(function(row){
        html+="<tr>";
        row.forEach(function(column){
            html+="<td>"+column+"</td>";
        });
        html+="</tr>";
    });
    return html + "</table>";
}
