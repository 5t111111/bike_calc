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
      tt: "",
      ct: "",
      sa: "",
      sb: ""
  },
  methods: {
    calc: function() {
      this.sb = Math.round(parseInt(this.ct, 10) * Math.cos(parseInt(this.sa, 10)/180*3.14));
    }
  }
});
