/* global Vue */
const moment = require("moment");
const length = require("length.js");
const math = require("mathjs");
const app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from Vue!!!!!",
      conversion70: length(70, "m").to("ft"),
      conversionMi: length(1, "mi").to("m"),
    };
  },
  created: {

  }, 
  methods: {

  }
});

console.log("Hello from Javascript!");
var startOfDay = moment().startOf('day').fromNow();
console.log(startOfDay);

var conversion = length(70, "m").to("ft");
console.log(conversion);

console.log(math.evaluate('12 / (2.3 + 0.7)'));
console.log(math.evaluate('9 / 3 + 2i'));

let greeting = "howdy!";
console.log(`Template literals are cool. I can use a variable within a string to say ${greeting}`);