"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Room =
/*#__PURE__*/
function () {
  function Room(name, description, exits, location, items, passageN, passageS, passageW, passageE, passageNLocked, passageSLocked, passageWLocked, passageELocked) {
    _classCallCheck(this, Room);

    this.name = name;
    this.description = description;
    this.exits = exits;
    this.location = location;
    this.items = items;
    this.passageN = passageN;
    this.passageS = passageS;
    this.passageW = passageW;
    this.passageE = passageE;
    this.passageNLocked = passageNLocked; // puzzle object goes here 

    this.passageSLocked = passageSLocked; // puzzle object goes here

    this.passageWLocked = passageWLocked; // puzzle object goes here

    this.passageELocked = passageELocked; // puzzle object goes here
  }

  _createClass(Room, [{
    key: "displayRoom",
    value: function displayRoom() {
      println(this.description);
      var lat = this.getRoomLocation()[0];
      var _long = this.getRoomLocation()[1];
      console.log(lat);
      console.log(_long);

      if (lat != 0) {
        if (map[lat - 1][_long] != null) {
          if (map[lat - 1][_long].passageN != null) {
            println(map[lat - 1][_long].passageN);
          }
        }
      }

      if (lat != 4) {
        if (map[lat + 1][_long] != null) {
          if (map[lat + 1][_long].passageS != null) {
            println(map[lat + 1][_long].passageS);
          }
        }
      }

      if (_long != 0) {
        if (map[lat][_long - 1] != null) {
          if (map[lat][_long - 1].passageW != null) {
            println(map[lat][_long - 1].passageW);
          }
        }
      }

      if (_long != 4) {
        if (map[lat][_long + 1] != null) {
          if (map[lat][_long + 1].passageE != null) {
            println(map[lat][_long + 1].passageE);
          }
        }
      }

      var viewItems = [];

      for (var pusher = 1; pusher < this.items.length - 1; pusher++) {
        viewItems.push(this.items[pusher]);
      }

      viewItems.push("and " + this.items[this.items.length - 1] + ".");

      if (this.items[0] != false) {
        println("In the room you see " + viewItems.join(", "));
      }
    }
  }, {
    key: "getRoomLocation",
    value: function getRoomLocation() {
      for (var lat = 0; lat < map.length; lat++) {
        for (var _long2 = 0; _long2 < map.length; _long2++) {
          if (map[lat][_long2] == this) {
            return [lat, _long2];
          }
        }
      }
    }
  }, {
    key: "getTrueRoomLocation",
    value: function getTrueRoomLocation() {
      for (var lat = 0; lat < trueMap.length; lat++) {
        for (var _long3 = 0; _long3 < trueMap.length; _long3++) {
          if (trueMap[lat][_long3] == this) {
            return [lat, _long3];
          }
        }
      }
    }
  }]);

  return Room;
}(); //starter room


var starterRoom = new Room("Starting room", //name
"This room looks like an abandon machine shop. The floor is cluttered with tools and scrap metal.", //Description
["north", [3, 2]], // exits 
[4, 2], //location
[true, "a rusty nail", "a steel door to the north", "some scrap metal on the floor"], //items
null, //passage north
"There is a cold and large steel door here", //passage south 
null, //passage West
null);
var lock = [lockOne];
var nextRoom = new Room("boiler Room", //name
"This room contains a large boiler and is full of broken chairs", //Description
null, //exits 
[3, 2], //location
[false], //items
"There is a steel door leading north", //passage north
null, //passage south
null, //passage West
null, //passage East
lock[0], //passage north locked
[false], //passage south locked
[false], //passage West locked
[false] //passage East locked
);
console.log(starterRoom.description);
console.log(starterRoom.exits);
var map = new Array();
map = [[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, nextRoom, null, null], [null, null, starterRoom, null, null]];
console.table(map);
var trueMap = new Array();
trueMap = [[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, nextRoom, null, null], [null, null, starterRoom, null, null]];
/*
Room Template:
    //name
    //Description
    //exits 
    //location
    //items
    //passage north
    //passage south
    //passage West
    //passage East
    //passage north locked
    //passage south locked
    //passage West locked
    //passage East locked

*/