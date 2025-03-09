let ladder = {

  start: 0,

  up: function () { // підніматиме вас на одну сходинку
    this.start++
    return this
  },
  down: function () { // опускатиме вас на одну сходинку
    this.start--
    return this
  },
  showStep: function () { // показує поточну сходинку
    console.log(this.start)
    return this
  }
};

// ladder.up();

// ladder.up();

// ladder.down();

// ladder.showStep(); 

ladder.up().up().down().showStep().up().showStep()


