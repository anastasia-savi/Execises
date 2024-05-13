let leftOffset = 0;
let topOffset = 0;
let direction = "right";

function moveint() {
  $("h1").offset({ left: leftOffset, top: topOffset });

  if (direction === "right") {
    leftOffset++;
    if (leftOffset >= 200) {
      leftOffset = 200;
      direction = "down";
    }
  } else if (direction === "down") {
    topOffset++;
    if (topOffset >= 200) {
      topOffset = 200;
      direction = "left";
    }
  } else if (direction === "left") {
    leftOffset--;
    if (leftOffset <= 0) {
      leftOffset = 0;
      direction = "up";
    }
  } else if (direction === "up") {
    topOffset--;
    if (topOffset <= 0) {
      topOffset = 0;
      direction = "right";
    }
  }
}

let moveInterval = setInterval(moveint, 15);
let cl = 0;
$("h1").click(function (event) {
  clearInterval(moveInterval);
  cl++;
  moveInterval = setInterval(moveint, 15 - cl);
  if (cl === 10) {
    clearInterval(moveInterval);
    $("h1").text("You win!");
  }
});

//stop the h1
// $("html").click(function (event) {
//   clearInterval(moveInterval);
// });
