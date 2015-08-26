/* require */
var CalcJadeObj = require("../../views/calc.jade");
var calcHtml = CalcJadeObj();

document.getElementById("calc-wrapper").innerHTML = calcHtml;

//require('../css/style.css');
//require('../css/calc.css');

var Vue = require('vue');

var vm = new Vue({
  el: '#calc',
  data: {
      text: "test"
  }
});
