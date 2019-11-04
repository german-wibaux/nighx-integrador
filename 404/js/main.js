window.addEventListener('DOMContentLoaded', (event) => {
  let loop = false;
  const avatar = new Avatar('avatar');
  const zombie = new Zombie('zombie');
  const spider = new Spider('spider');
  
  function keyHandler(event) {
    event.preventDefault();
    
    if (event.type == 'keydown' && event.keyCode == 38) {
      avatar.jump();
    }
    if (event.type == 'keydown' && event.keyCode == 37 || event.keyCode == 39) {
      avatar.move(event.keyCode);
    }
  }
  
  function gameLoop() {
    if (avatar.checkCollision(zombie) || avatar.checkCollision(spider)) {
      loop = false;
      avatar.die();
      gameOver();
    }
    if (loop) {
      requestAnimationFrame(gameLoop);
    }
  }
  
  function start() {
    menu.style.display = 'none';
    avatar.init();
    zombie.init();
    spider.init();
    loop = true;
    requestAnimationFrame(gameLoop);
  }
  function gameOver() {
    zombie.stop();
    spider.stop();
    setTimeout(() => {
      menu.style.display = 'block';
      avatar.stop();
    }, 1200);
  }
  
  const menu = document.getElementById('menu');
  const empezarButton = document.getElementById('empezar');
  empezarButton.onclick = function() {
    start();
  };
  
  window.addEventListener('keydown', keyHandler);
});
