class Avatar extends Character {
  constructor(domId) {
    super(domId);
    this.dieAudio = document.getElementById('dieAudio');
  }
  
  init() {
    this.domElement.classList.remove('die');
    this.domElement.classList.add('run');
    this.domElement.style.display = 'block';
    this.domElement.style.left = '100px';
    this.domElement.style.bottom = '5px';
  }
  checkCollision(element) {
    this.updatePosition();
    element.updatePosition();

    const offset = 20;
    
    if (this.position.left < element.position.left + element.width &&
      this.position.left + this.width - offset > element.position.left &&
      this.position.top < element.position.top + element.height &&
      this.position.top + this.height > element.position.top) {
      return true;
    }
    return false;
  }
  move(key) {
    this.updatePosition();
    switch (key) {
      case 37:
        this.domElement.style.left = this.position.left - 20 + 'px';
        break;
        
      case 39:
        this.domElement.style.left = this.position.left + 20 + 'px';
        
      default:
        break;
    }
  }
  jump() {
    this.domElement.classList.add('jump');
    setTimeout(() => {
      this.domElement.classList.remove('jump');
    }, 700);
  }
  die() {
    this.dieAudio.play();
    this.domElement.classList.add('die');
    setTimeout(() => {
      this.domElement.classList.remove('die');
    }, 1200);
  }
  stop() {
    this.domElement.style.left = '100px';
    this.domElement.style.bottom = '100px';
    this.domElement.classList.remove('run');
  }
}
