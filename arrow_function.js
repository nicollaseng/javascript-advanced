class Arrow {
  constructor() {
    function setNames(names) {
      console.log("third", this);
    }
    this.setNames = setNames.bind(this);
    setNames();
  }
}

const arrow = new Arrow();
arrow;
