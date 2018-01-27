Vue.component("my-component", {
  template: ' <div class="app" > {{ message }} </div> ',
  data: function() {
    return {
      message: "Hello from Vue data!"
    };
  }
});

new Vue({
  el: "#app",
  data: {
    message: "Hello, World",
    value: true
  },
  methods: {
    changeMessage: function() {
      alert(this.message);
    }
  }
});
