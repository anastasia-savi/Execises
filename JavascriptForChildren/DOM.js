//jQuery add element, add effects.
let names = ["Antony", "Andrew", "Anna", "Anastasia", "Aurora"];
for (let i = 0; i < names.length; i++) {
  $("<p>")
    .text(names[i])
    .hide()
    .appendTo("body")
    .delay(1000 * i)
    .fadeIn(1000);
}
$("h1").text("My friends");
$("h1").fadeTo(5000, 0.3);

//add delay
// for (let i = 0; i < 5; i++) {
//   $("h1")
//     .fadeOut()
//     .delay(2000)
//     .fadeIn(1000 * i);
// }
$("p").append(" smells!");

//setTimeout, setInterval
let leftOffset = 0;
let moveHeading = function () {
  $("h1").offset({ left: leftOffset });
  leftOffset++;
  if (leftOffset > 200) {
    leftOffset = 0;
  }
};
setInterval(moveHeading, 15);

//clickHandler
let clickHandler = function (event) {
  console.log("Клик! " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHandler);

//mousemove
$("html").click(function (event) {
  $("h1").offset({
    left: event.pageX,
    top: event.pageY,
  });
});
