let Car = function (x, y) {
  this.x = x;
  this.y = y;
  this.speed = Math.floor(Math.random() * 5);
  this.draw();
};

Car.prototype.draw = function () {
  let carHtml = '<img src="http://nostarch.com/images/car.png">';
  this.carElement = $(carHtml);
  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y,
  });
  $("body").append(this.carElement);
};

Car.prototype.moveRight = function () {
  this.x += this.speed;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveLeft = function () {
  this.x -= this.speed;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};
Car.prototype.moveUp = function () {
  this.y -= this.speed;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};
Car.prototype.moveDown = function () {
  this.y += this.speed;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

let tesla = new Car(20, 20);
let nissan = new Car(100, 200);

setInterval(function () {
  // Update speed every 30 milliseconds
  tesla.speed = Math.floor(Math.random() * 5);
  nissan.speed = Math.floor(Math.random() * 5);
}, 30);

// setInterval(tesla.moveRight.bind(tesla), 30);
// setInterval(nissan.moveRight.bind(nissan), 30);
