const overlay = document.getElementById("overlay");
const body = document.getElementById("home");
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        overlay.className = "animated fadeInDown";
    } else {
        overlay.className = "animated fadeOut";
    }
    prevScrollpos = currentScrollPos;
};
