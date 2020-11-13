"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function secondHandSubmit(command) {
  //Get rid of special characters/multiple spaces, split the command into words
  command = command.replace("  ", " ");
  command = command.toLowerCase();
  words = command.split(" "); //If the first word is a valid command, trigger the associated function

  if (commands[words[0]]) {
    var op = commands[words.shift()];
    op.trigger(words);
  }
}

var gameObject =
/*#__PURE__*/
function () {
  function gameObject(name, description, canPickUp, useFunction, lookDescription, comboUse, picture) {
    _classCallCheck(this, gameObject);

    this.name = name;
    this.description = description;
    this.canPickUp = canPickUp;
    this.useFunction = useFunction;
    this.lookDescription = lookDescription;
    this.comboUse = comboUse;
    this.picture = picture;
  }

  _createClass(gameObject, [{
    key: "displayObject",
    value: function displayObject() {
      println(this.name);
      println(this.description);
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this.description;
    }
  }, {
    key: "getLook",
    value: function getLook() {
      if (this.picture != null) {
        console.log("yee");
        printImage(this.picture);
        println(this.lookDescription);
      } else {
        console.log("no");
        println(this.lookDescription);
      }
    }
  }]);

  return gameObject;
}();

var gimicObject =
/*#__PURE__*/
function (_gameObject) {
  _inherits(gimicObject, _gameObject);

  function gimicObject(name, description, canPickUp, useFunction, useDescription, lookDescription, comboUse) {
    var _this;

    _classCallCheck(this, gimicObject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(gimicObject).call(this, name, description, canPickUp, useFunction, lookDescription, comboUse));
    _this.useDescription = useDescription;
    return _this;
  }

  _createClass(gimicObject, [{
    key: "getUseDescription",
    value: function getUseDescription() {
      return this.useDescription;
    }
  }]);

  return gimicObject;
}(gameObject);

var rustyNail = new gimicObject("rusty nail", //name
"a Rusty Nail", //description
true, //canPickUp if you can set to true, otherwise put a discription of why...
null, "You cannot think of a use for a broken rusted nail...", //maybe gimic useDescription
"It is an old broken nail, entirely useless.", null, function comboUse(secondItem) {
  "There is nothing you can do with this nail";
});
var steelDoor = new gameObject("steel door", //name
"a Steel Door to the north", //description
"This is a steel door... you cannot take it", //canPickUp if you can set to true, otherwise put a discription of why...
function useFunction() //useFunction  
{
  doorUser("north");
}, //
"The door has a small fragile lock on it.", function comboUse(secondItem) {
  if (secondItem == crowbar) {
    if (northRoom().passageNLocked[0] != false) {
      println("You try the crowbar on the door and the lock snaps and falls to the floor.");
      this.lookDescription = "This door used to have a steel lock on it. It's now broken and on the ground.";
      northRoom().passageNLocked[0] = false;
    } else {
      println("The lock is already broken.");
    }
  }
});
var scrapMetal = new gameObject("scrap metal", //name
"some Scrap Metal on the floor", //description
"There is way to much metal to take", //canPickUp if you can set to true, otherwise put a discription of why...
null, //useFunction
"This scrap metal is old and rusted, it looks like it is of little use.", null);
var crowbar = new gameObject("crowbar", "a Crowbar", true, function useFunction() {
  println("This is a useful item but not by it self");
}, "The crowbar is blue and has a red top.", function comboUse(secondItem) {
  console.log("adfaas");
  crowbarUses(secondItem);
}, "crowbar.png");
/* Template

    //name
    //description
    //canPickUp if you can set to true, otherwise put a discription of why...
    //useFunction
    //maybe gimic useDescription
    // detailed desc.
    // use with map
*/
//functions

function doorUser(direction) {
  if (direction = "north") {
    secondHandSubmit("go north");
  } else if (direction = "south") {
    secondHandSubmit("go south");
  } else if (direction = "west") {
    secondHandSubmit("go west");
  } else if (direction = "east") {
    secondHandSubmit("go east");
  }
}

function gimicUse(object) {
  console.log(object);
  println(object.useDescription);
}

function crowbarUses(secondItem) {
  secondItem.comboUse(crowbar);
}