"use strict";

commands = {
  go: {
    description: "Go <br>Input Go and then the direction you wish to travel. If you cannot move that way it will inform you of such!",
    trigger: function trigger(words) {
      console.log(words);

      if (words == "north") {
        if (player.location()[0] != 0) {
          if (northRoom() != null) {
            player.moveNorth();
            roomUnpacker();
          }
        }
      } else if (words == "south") {
        if (player.location()[0] != 0) {
          if (southRoom() != null) {
            player.moveSouth();
            roomUnpacker();
          }
        }
      } else if (words == "west") {
        if (player.location()[0] != 0) {
          if (westRoom() != null) {
            player.moveWest();
            roomUnpacker();
          }
        }
      } else if (words == "west") {
        if (player.location()[0] != 0) {
          if (eastRoom() != null) {
            player.moveEast();
            roomUnpacker();
          }
        }
      } else if (words == "") {
        println("you most go in a direction.");
      } else {
        println("You cannot go " + words + ".");
      }
    }
  },
  help: {
    description: "help x<br>Prints description of given command x.<br><br>help names<br>Prints list of commands.<br><br>help<br>Prints all commands with descriptions.",
    trigger: function trigger(words) {
      if (!words.length) {
        var result = "";

        for (var key in commands) {
          result += "<p>" + commands[key].description + "</p>";
        }

        println(result);
      } else if (words[0] == "names") {
        var _result = "";

        for (var _key in commands) {
          _result += _key + " ";
        }

        println(_result);
      } else if (commands[words[0]]) {
        println("<p>" + commands[words[0]].description + "</p>");
      }
    }
  }
};