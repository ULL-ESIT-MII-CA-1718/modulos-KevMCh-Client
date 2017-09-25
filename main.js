/**
 * Main program
 */
var input = require("./input.json");
var DTable = require("@kevmch/oop");

var table = new DTable();
console.log(table.drawAllTable(input));
