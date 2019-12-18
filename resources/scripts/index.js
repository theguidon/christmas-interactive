const overlay = document.getElementById("overlay");
const home0 = document.getElementById("home0");
const home1 = document.getElementById("home1");
const home2 = document.getElementById("home2");
const home3 = document.getElementById('home3');
const home4 = document.getElementById('home4');
const home5 = document.getElementById('home5');

let count = 0;
let overlayStatus = true;

const onScrollDown = () => {
    overlay.className = "animated fadeOut";
    count = 5;
    overlayStatus = false;
};

window.addEventListener('wheel', e => {
    let delta = e.deltaY; // just to know if it is scroll wheel up or down

    if (delta < 0) {
        count -= 1;

    } else if (delta > 0) {
        // scroll down
        count += 1;
        overlay.className = "animated fadeOut";
        overlayStatus = false;
    }

    if (count <= 0 && overlayStatus === false) {
        overlay.style.display = "block";
        overlay.className = "animated fadeInDown";
        overlayStatus = true;
    } else if (count >= 75) {
        home1.style.display = "none";
    } else if (count <= 25) {
        home0.style.display = "block";
    } else if (count >= 25) {
        home0.style.display = "none";
        home1.style.display = "block";
    }
});


$(document).bind('touchmove mousemove', function (e) {
    // var eventDoc, doc, body;

    e = e || window.e;
    var x = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
    var y = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;

    // if (x == null && event.clientX != null) {
    //     eventDoc = (event.target && event.target.ownerDocument) || document;
    //     doc = eventDoc.documentElement;
    //     body = eventDoc.body;

    //     x = e.clientX +
    //         (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
    //         (doc && doc.clientLeft || body && body.clientLeft || 0);
    //     y = e.clientY +
    //         (doc && doc.scrollTop || body && body.scrollTop || 0) -
    //         (doc && doc.clientTop || body && body.clientTop || 0);
    // }

    console.log("x:", x, "y:", y);
    if ((360 >= x && x >= 280) && (740 >= y && y >= 660) && !overlayStatus && count >= 75) {
        home3.style.display = "block";
        home2.style.cursor = "pointer";
        home4.style.display = "none";
        home5.style.display = "none";
        overlay.style.display = "none";

        home3.addEventListener("click", () => {
            console.log('Ornament 1 clicked');
            // enter code here
        });
    } else if ((440 >= x && x >= 360) && (880 >= y && y >= 800) && !overlayStatus && count >= 75) {
        home4.style.display = "block";
        home2.style.cursor = 'pointer';
        home3.style.display = "none";
        home5.style.display = "none";
        overlay.style.display = "none";

        home4.addEventListener("click", () => {
            console.log('Ornament 2 clicked');
            // enter code here
        });
    } else if ((540 >= x && x >= 450) && (700 >= y && y >= 620) && !overlayStatus && count >= 75) {
        home5.style.display = "block";
        home2.style.cursor = 'pointer';
        home4.style.display = "none";
        home3.style.display = "none";
        overlay.style.display = "none";

        home5.addEventListener("click", () => {
            console.log('Ornament 3 clicked');
            // enter code here
        });
    } else {
        home3.style.display = "none";
        home4.style.display = "none";
        home5.style.display = "none";
        home2.style.cursor = 'auto';
    }
});
