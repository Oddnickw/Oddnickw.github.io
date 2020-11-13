"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var puzzle =
/*#__PURE__*/
function () {
  function puzzle(name, description, solution, solved) {
    _classCallCheck(this, puzzle);

    this.name = name;
    this.description = description;
    this.solution = solution;
    this.solved = solved; // always created as false changed to true by solved()
  }

  _createClass(puzzle, [{
    key: "getDescription",
    value: function getDescription() {
      println(this.description);
    }
  }]);

  return puzzle;
}();

var lockOne = new puzzle("locked steel door", //name
"You try the door but its locked...", //description
null, //solution
false // solved
);
/*
Template 
    //name
    //solution
    //solved



*/