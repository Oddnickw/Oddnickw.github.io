"use strict";

commands = {
  i: {
    trigger: function trigger(word) {
      secondHandSubmit("inventory");
    }
  },
  inv: {
    trigger: function trigger(word) {
      secondHandSubmit("inventory");
    }
  },
  grab: {
    trigger: function trigger(word) {
      words = words.join(" ");
      input = "take " + words;
      console.log(input);
      secondHandSubmit(input);
    }
  },
  pick: {
    trigger: function trigger(word) {
      words.shift();
      words = words.join(" ");
      input = "take " + words;
      console.log(input);
      secondHandSubmit(input);
    }
  },
  drop: {
    description: "Drop <br> Type this to drop an item onto the floor",
    trigger: function trigger(words) {
      words = words.join(" ");
      var itemNames = [];

      for (var index = 0; index < player.inventory.length; index++) {
        itemNames.push(player.inventory[index].getName());
      }

      console.log(itemNames);

      if (itemNames.indexOf(words) != -1) {
        slot = itemNames.indexOf(words);
        currentRoom().addItem(player.inventory[slot]);
        player.dropItem(slot);

        if (currentRoom().items[0] == false) {
          currentRoom().items[0] = true;
        }

        println("You drop " + words);
      }
    }
  },
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

        if (currentRoom().items.length == 1) {
          currentRoom().items[0] = false;
        }

        if (currentRoom().items[slot].canPickUp == true) {
          currentRoom().removeItem(slot);
        }
      } else {
        println("There is no " + words + " to take!");
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

      var inventoryList = [];

      for (var finder = 0; finder < player.inventory.length; finder++) {
        inventoryList.push(player.inventory[finder].getName());
      }

      console.log(itemNames);

      if (itemNames.indexOf(words) != -1) {
        slot = itemNames.indexOf(words) + 1;
        currentRoom().items[slot].getLook();
      } else if (inventoryList.indexOf(words) != -1) {
        slot = inventoryList.indexOf(words);
        player.inventory[slot].getLook();
      } else if (words == "") {
        roomUnpacker();
      }
    }
  },
  use: {
    description: "Use <br> Type use followed by an object in the room to attempt to use it",
    trigger: function trigger(words) {
      if (words.indexOf("on") == -1) {
        words = words.join(" ");
        var itemNames = [];

        for (var index = 1; index < currentRoom().items.length; index++) {
          itemNames.push(currentRoom().items[index].getName());
        }

        var inventoryList = [];

        for (var finder = 0; finder < player.inventory.length; finder++) {
          inventoryList.push(player.inventory[finder].getName());
        }

        console.log(itemNames);

        if (itemNames.indexOf(words) != -1 || inventoryList.indexOf(words) != -1) {
          var slot = itemNames.indexOf(words) + 1;
          var inventorySlot = inventoryList.indexOf(words);

          if (currentRoom().items[slot] == player.inventory[inventorySlot]) {
            item = player.inventory[inventorySlot];
          } else if (currentRoom().items[slot].name == words) {
            console.log("yee");
            item = currentRoom().items[slot];
          } else {
            item = player.inventory[inventorySlot];
            console.log("purple");
          }

          if (item instanceof gimicObject) {
            //plz fix
            println(item.getUseDescription());
          } else {
            item.useFunction();
          }
        } else if (words == "door") {
          println("So, ya wanna use a door? Which one? Buco...");
        } else {
          println("there is no " + words + " in this room" + " <br> Try looking for the capitalized words in the description!");
        }
      } else {
        var divider = words.indexOf("on");
        firstItem = words.slice(0, divider);
        secondItem = words.slice(divider + 1);
        firstItem = firstItem.join(" ");
        secondItem = secondItem.join(" ");
        console.log(firstItem);
        console.log(secondItem);
        var firstItemNames = [];

        for (var _index = 1; _index < currentRoom().items.length; _index++) {
          firstItemNames.push(currentRoom().items[_index].getName());
        }

        var firstInventoryList = [];

        for (var _finder = 0; _finder < player.inventory.length; _finder++) {
          firstInventoryList.push(player.inventory[_finder].getName());
        }

        if (firstItemNames.indexOf(firstItem) != -1 || firstInventoryList.indexOf(firstItem) != -1) {
          console.log("wee");
          var firstItemPresent = true;
        }

        var secondItemNames = [];

        for (var _index2 = 1; _index2 < currentRoom().items.length; _index2++) {
          secondItemNames.push(currentRoom().items[_index2].getName());
        }

        var secondInventoryList = [];

        for (var _finder2 = 0; _finder2 < player.inventory.length; _finder2++) {
          secondInventoryList.push(player.inventory[_finder2].getName());
        }

        if (secondItemNames.indexOf(secondItem) != -1 || secondInventoryList.indexOf(secondItem) != -1) {
          console.log("wee");
          var secondItemPresent = true;
        }

        if (firstItemPresent == true && secondItemPresent == true) {
          console.log("yee yee");

          if (firstItemNames.indexOf(firstItem) != -1 || firstInventoryList.indexOf(firstItem) != -1) {
            var slot = firstItemNames.indexOf(firstItem) + 1;
            var inventorySlot = firstInventoryList.indexOf(firstItem);

            if (currentRoom().items[slot] == player.inventory[inventorySlot]) {
              firstItem = player.inventory[inventorySlot];
            } else if (currentRoom().items[slot].name == firstItem) {
              console.log("yee");
              firstItem = currentRoom().items[slot];
            } else {
              firstItem = player.inventory[inventorySlot];
              console.log("purple");
            }

            if (secondItemNames.indexOf(secondItem) != -1 || secondInventoryList.indexOf(secondItem) != -1) {
              var slot = secondItemNames.indexOf(secondItem) + 1;
              var inventorySlot = secondInventoryList.indexOf(secondItem);

              if (currentRoom().items[slot] == player.inventory[inventorySlot]) {
                secondItem = player.inventory[inventorySlot];
              } else if (currentRoom().items[slot].name == secondItem) {
                console.log("yee");
                secondItem = currentRoom().items[slot];
              } else {
                secondItem = player.inventory[inventorySlot];
                console.log("purple");
              }

              console.log(firstItem);
              console.log(secondItem);
              firstItem.comboUse(secondItem);
            } else {
              println("One of those two objects is not usable. Make sure they are in the room or your inventory!");
            }
          }
        }
      }
    }
  },
  go: {
    description: "Go <br>Input Go and then the direction you wish to travel. If you cannot move that way it will inform you of such!",
    trigger: function trigger(words) {
      console.log(words);

      if (words == "north") {
        console.log(northRoom().passageNLocked[0]);

        if (northRoom().passageNLocked[0] == false) {
          console.log("door not locked");

          if (player.location()[0] != 0) {
            console.log("player is in a good spot");

            if (northRoom() != null) {
              console.log("there is a room");
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
          northRoom().passageNLocked[0].getDescription();
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