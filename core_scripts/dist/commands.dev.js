"use strict";

commands = {
  inventory: {
    description: "Inventory <br> Type inventory to see what you are carrying.",
    trigger: function trigger(words) {
      player.displayInventory();
    }
  },
  take: {
    description: "Take <br> Type take to take an object into your invetory",
    trigger: function trigger(words) {
      words = words.join(" ");
      var itemNames = [];

      for (var index = 1; index < currentRoom().items.length; index++) {
        itemNames.push(currentRoom().items[index].getName());
      }

      console.log(itemNames);

      if (itemNames.indexOf(words) != -1) {
        slot = itemNames.indexOf(words) + 1;
        player.addItem(currentRoom().items[slot]);
      }
    }
  },
  look: {
    description: "Look <br> Type look followed by an object to get a closer look. If you leave it blank it will reprint the room description.",
    trigger: function trigger(words) {
      words = words.join(" ");
      var itemNames = [];

      for (var index = 1; index < currentRoom().items.length; index++) {
        itemNames.push(currentRoom().items[index].getName());
      }

      console.log(itemNames);

      if (itemNames.indexOf(words) != -1) {
        slot = itemNames.indexOf(words) + 1;
        println(currentRoom().items[slot].getLook());
      } else if (words == "") {
        roomUnpacker();
      }
    }
  },
  use: {
    description: "Use <br> Type use followed by an object in the room to attempt to use it",
    trigger: function trigger(words) {
      words = words.join(" ");
      var itemNames = [];

      for (var index = 1; index < currentRoom().items.length; index++) {
        itemNames.push(currentRoom().items[index].getName());
      }

      console.log(itemNames);

      if (itemNames.indexOf(words) != -1) {
        slot = itemNames.indexOf(words) + 1;

        if (currentRoom().items[slot] instanceof gimicObject) {
          println(currentRoom().items[slot].getUseDescription());
        } else {
          currentRoom().items[slot].useFunction();
        }
      } else if (words == "door") {
        println("So, ya wanna use a door? Which one? Buco...");
      } else {
        println("there is no " + words + " in this room" + " <br> Try looking for the capitalized words in the description!");
      }
    }
  },
  go: {
    description: "Go <br>Input Go and then the direction you wish to travel. If you cannot move that way it will inform you of such!",
    trigger: function trigger(words) {
      console.log(words);

      if (words == "north") {
        console.log(northRoom().passageNLocked[0]);

        if (northRoom().passageNLocked[0] = false) {
          if (player.location()[0] != 0) {
            if (northRoom() != null) {
              player.moveNorth();
              console.log(currentRoom());
              roomUnpacker();
            } else {
              println("There is no room to the North.");
            }
          } else {
            println("there is no room to the North");
          }
        } else {
          println(northRoom().passageNLocked.description);
        }
      } else if (words == "south") {
        if (player.location()[0] != 4) {
          if (southRoom() != null) {
            player.moveSouth();
            console.log(currentRoom());
            roomUnpacker();
          } else {
            println("There is no room to the South.");
          }
        } else {
          println("there is no room to the South");
        }
      } else if (words == "west") {
        if (player.location()[1] != 0) {
          if (westRoom() != null) {
            player.moveWest();
            console.log(currentRoom());
            roomUnpacker();
          } else {
            println("There is no room to the West.");
          }
        } else {
          println("there is no room to the West");
        }
      } else if (words == "east") {
        if (player.location()[1] != 4) {
          if (eastRoom() != null) {
            player.moveEast();
            console.log(currentRoom());
            roomUnpacker();
          } else {
            println("There is no room to the East.");
          }
        } else {
          println("there is no room to the East");
        }
      } else if (words == "") {
        println("you most go in a direction.");
      } else {
        println("You cannot go " + words.join("🍈") + ".");
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