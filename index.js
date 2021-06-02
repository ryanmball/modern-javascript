/* global Vue, moment */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from Vue!",
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