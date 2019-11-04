class Character {
  constructor(domId) {
    this.domId = domId;
    this.domElement = document.getElementById(this.domId);
    this.width = this.domElement.getBoundingClientRect().width;
    this.height = this.domElement.getBoundingClientRect().height;
    this.position = {top: this.domElement.getBoundingClientRect().top, left: this.domElement.offsetLeft};
  }

  updatePosition() {
    this.position.top = this.domElement.getBoundingClientRect().top;
    this.position.left = this.domElement.offsetLeft;
  }
}
