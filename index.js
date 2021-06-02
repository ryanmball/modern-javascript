/* global Vue, moment */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from Vue!"
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
