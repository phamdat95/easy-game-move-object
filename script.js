function Hero(image, top, left, size,speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed=speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }
  this.moveRight = function(){
    this.left += this.speed;
  }
  this.moveLeft = function(){
    this.left -= window.innerWidth - hero.size;
  }
}

var hero = new Hero('game.gif', 20, 30, 500,10);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  } else if(hero.left >= hero.size){
    hero.moveLeft();
  }

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 50);
}

start();