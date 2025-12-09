AFRAME.registerComponent("trigger-miranda-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      console.log("Hello?");
      var targetEl = document.querySelector("#movingDean"); // The target object
      if (targetEl) {
        targetEl.emit("runmovingDean"); // Emit the custom event
      }
      var targetEl2 = document.querySelector("#movingSam"); // The target object
      if (targetEl2) {
        targetEl2.emit("runmovingSam"); // Emit the custom event
      }
    });
  },
});
