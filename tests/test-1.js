/*
Test 1:
  For the cell with the text "Croc", set the background color to red.
*/
var $ = require("jquery");

$(document).ready(() => {
  // const el = document.querySelector("#croc");
  const el = $("#croc")[0];
  el.style.background = "red";
});
