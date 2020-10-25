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
    key: "solution",
    value: function solution() {//pretty much just a thing and at the end it runs solved function
    }
  }, {
    key: "solved",
    value: function solved() {}
  }]);

  return puzzle;
}();