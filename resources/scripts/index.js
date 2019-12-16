const overlay = document.getElementById("overlay");
const home0 = document.getElementById("home0");
const home1 = document.getElementById("home1");
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// let prevScrollpos = window.pageYOffset;
// window.onwheel = () => {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         overlay.className = "animated fadeInDown";
//     } else {
//         overlay.className = "animated fadeOut";
//     }
//     prevScrollpos = currentScrollPos;
// };


let count = 0;

window.addEventListener('wheel', e => {
    let delta = e.deltaY; // just to know if it is scroll wheel up or down

    if (delta < 0) {
        count -= 1;

    } else if (delta > 0) {
        // scroll down
        count += 1;
        overlay.className = "animated fadeOut";
    }

    if (count <= 0) {
        overlay.className = "animated fadeInDown";

    } else if (count >= 75) {
        home1.style.display = "none";
    } else if (count <= 25) {
        home0.style.display = "block";
    } else if (count >= 25) {
        home0.style.display = "none";
        home1.style.display = "block";
    }
});
