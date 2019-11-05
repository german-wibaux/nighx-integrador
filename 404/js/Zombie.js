class Zombie extends Character {
  constructor(domId) {
    super(domId);
  }

  init() {
    this.domElement.classList.add('zanimate');
    setTimeout(() => {
      this.domElement.classList.add('zmove');
    }, 5000);
  }
  stop() {
    this.domElement.classList.remove('zmove');
  }
}
