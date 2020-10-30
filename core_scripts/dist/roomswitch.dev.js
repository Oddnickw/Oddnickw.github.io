"use strict";

var player = {
  inventory: [],
  abilities: [],
  location: function location() {
    for (var row = 0; row < playerTrack.length; row++) {
      for (var column = 0; column < playerTrack.length; column++) {
        if (playerTrack[row][column] == this) {
          return [row, column];
        }
      }
    }
  },
  moveNorth: function moveNorth() {
    var yCord = player.location()[0];
    var xCord = player.location()[1];
    playerTrack[yCord - 1][xCord] = player;
    playerTrack[yCord][xCord] = null;
  },
  moveSouth: function moveSouth() {
    var yCord = player.location()[0];
    var xCord = player.location()[1];
    playerTrack[yCord + 1][xCord] = player;
    playerTrack[yCord][xCord] = null;
  },
  moveWest: function moveWest() {
    var yCord = player.location()[0];
    var xCord = player.location()[1];
    playerTrack[yCord][xCord - 1] = player;
    playerTrack[yCord][xCord] = null;
  },
  moveEast: function moveEast() {
    var yCord = player.location()[0];
    var xCord = player.location()[1];
    playerTrack[yCord][xCord + 1] = player;
    playerTrack[yCord][xCord] = null;
  },
  addItem: function addItem(item) {
    this.inventory.push(item);
  },
  dropItem: function dropItem(item) {
    if (this.inventory.find(item) != -1) {
      var slot = this.inventory.find(item);
    }
  },
  displayInventory: function displayInventory() {
    if (this.inventory.length == 0) {
      println("You have nothing... I'm sorry.");
    } else {
      var viewItems = [];

      for (var pusher = 0; pusher < this.inventory.length - 1; pusher++) {
        viewItems.push(this.inventory[pusher].name);
      }

      if (this.inventory.length > 1) {
        viewItems.push("and " + this.inventory[this.inventory.length - 1].name + ".");
      } else {
        viewItems.push("a " + this.inventory[0].name);
      }

      console.log(viewItems);
      println("you have " + viewItems.join(" "));
    }
  }
}; //player tracker 

function currentRoom() {
  var yCord = player.location()[0];
  var xCord = player.location()[1];
  return map[yCord][xCord];
}

function northRoom() {
  var yCord = player.location()[0] - 1;
  var xCord = player.location()[1];
  return map[yCord][xCord];
}

function southRoom() {
  var yCord = player.location()[0] + 1;
  var xCord = player.location()[1];
  return map[yCord][xCord];
}

function westRoom() {
  var yCord = player.location()[0];
  var xCord = player.location()[1] - 1;
  return map[yCord][xCord];
}

function eastRoom() {
  var yCord = player.location()[0];
  var xCord = player.location()[1] + 1;
  return map[yCord][xCord];
}

function roomUnpacker() {
  currentRoom().displayRoom();
}

var playerTrack = new Array(playerTrack);
playerTrack = [[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, player, null, null]];