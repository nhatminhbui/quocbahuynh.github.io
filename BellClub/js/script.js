/* COUNTDOWN TIMER */
// Set the date we're counting down to
var countDownDate = new Date("Mar 27, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementsByClassName("countdown")[0].innerHTML =
    days + " : " + hours + " : " + minutes + " : " + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementsByClassName("countdown")[0].innerHTML = "EXPIRED";
  }
}, 1000);

/* SIDEBAR  */
const style = document.createElement("style");

function openSideBar() {
  style.innerHTML = `
  #sidebar{
    visibility: visible;
    height: 100vh;
    width: 85%;
    transition: all 0.9s, opacity 2s;
  }
  `;
  document.head.appendChild(style);
}

function closeSideBar() {
  style.innerHTML = ``;
  document.head.appendChild(style);
}
