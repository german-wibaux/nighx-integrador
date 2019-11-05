class Spider extends Character {
  constructor(domId) {
    super(domId);
    this.dropping = false;
  }
  
  init() {
    this.dropping = true;
    setTimeout(() => {
      if (this.dropping) {
        this.drop();
      }
    }, 10000);
  }
  drop() {
    this.domElement.classList.add('sdrop');
    const self = this;
    const timer = setInterval(function() {
      const randomLeft = Math.floor(Math.random() * (600 - 50 + 1) + 50);
      self.domElement.style.left = randomLeft + 'px';
      if (!self.dropping) clearInterval(timer);
    }, 10000);
  }
  stop() {
    this.dropping = false;
    this.domElement.classList.remove('sdrop');
  }
}
