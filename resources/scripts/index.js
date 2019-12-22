const body = document.getElementById("body");
const overlay = document.getElementById("overlay");
const home0 = document.getElementById("home0");
const home1 = document.getElementById("home1");
// const home2 = document.getElementById("home2");
const home3 = document.getElementById('home3');
const home4 = document.getElementById('home4');
const home5 = document.getElementById('home5');

const article = document.getElementById("article");

let count = 0;
let overlayStatus = true;
let articleStatus = false;

const onScrollDown = () => {
    overlay.className = "animated fadeOut";
    count = 5;
    overlayStatus = false;
};

// function for showing article
const showArticle = articleNum => {
    const article = document.getElementById(`article-${articleNum}`);
    article.style.display = "block";
    body.style.height = "100%";
    body.style.overflowY = "auto";
    home0.style.display = "none";
    home1.style.display = "none";
    // home2.style.display = "none";
    home3.style.display = "none";
    home4.style.display = "none";
    home5.style.display = "none";

    articleStatus = true;
};


const closeArticle = articleNum => {
    const article = document.getElementById(`article-${articleNum}`);
    article.style.display = "none";
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
    body.style.backgroundImage = "url('./resources/images/wallpaper2.svg')";
    home0.style.display = "none";
    home1.style.display = "none";
    // home2.style.display = "none";
    home3.style.display = "none";
    home4.style.display = "none";
    home5.style.display = "none";

    articleStatus = false;
};
// Web Javascript
window.addEventListener('wheel', e => {
    // $(document).bind('mousewheel touchmove', e => {
    let delta = e.deltaY; // just to know if it is scroll wheel up or down

    console.log('scrolling web', count)
    if (delta < 0) {
        count -= 1;
        if (count <= 0) {
            count = 0;
        }

    } else if (delta > 0) {
        // scroll down
        count += 1;
        overlay.className = "animated fadeOut";
        overlayStatus = false;
    }

    if (count <= 0 && overlayStatus === false && articleStatus === false) {
        overlay.style.display = "block";
        overlay.className = "animated fadeInDown";
        overlayStatus = true;
    } else if (count >= 75 && articleStatus === false) {
        home1.style.display = "none";
        count = 75;
    } else if (count <= 25 && articleStatus === false) {
        home0.style.display = "block";
    } else if (count >= 25 && articleStatus === false) {
        home0.style.display = "none";
        home1.style.display = "block";
    }
});

$(document).bind('touchmove mousemove', e => {
    var eventDoc, doc, bodyDoc;
    e = e || window.e;
    var x = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
    var y = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;

    if (x == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        bodyDoc = eventDoc.bodyDoc;

        x = e.clientX +
            (doc && doc.scrollLeft || bodyDoc && bodyDoc.scrollLeft || 0) -
            (doc && doc.clientLeft || bodyDoc && bobodyDocdy.clientLeft || 0);
        y = e.clientY +
            (doc && doc.scrollTop || bodyDoc && bodyDoc.scrollTop || 0) -
            (doc && doc.clientTop || bodyDoc && bodyDoc.clientTop || 0);
    }

    console.log(
        "x:", x,
         "y:", y,
         "viewport w", Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
         "vieport h",  Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
            );
    if ((360 >= x && x >= 280) && (740 >= y && y >= 660) && !overlayStatus && count >= 75 && articleStatus === false) {
        home3.style.display = "block";
        body.style.cursor = "pointer";
        home4.style.display = "none";
        home5.style.display = "none";
        overlay.style.display = "none";

        $(home3).bind('click touchstart', e => {
            console.log('Ornament 1 clicked');
            // enter code here
            showArticle(1);

        });
    } else if ((440 >= x && x >= 360) && (880 >= y && y >= 800) && !overlayStatus && count >= 75 && articleStatus === false) {
        home4.style.display = "block";
        body.style.cursor = 'pointer';
        home3.style.display = "none";
        home5.style.display = "none";
        overlay.style.display = "none";

        $(home4).bind('click touchstart', e => {
            console.log('Ornament 2 clicked');
            // enter code here
            showArticle(2);
        });
    } else if ((540 >= x && x >= 450) && (700 >= y && y >= 620) && !overlayStatus && count >= 75 && articleStatus === false) {
        home5.style.display = "block";
        body.style.cursor = 'pointer';
        home4.style.display = "none";
        home3.style.display = "none";
        overlay.style.display = "none";

        $(home5).bind('click touchstart', e => {
            console.log('Ornament 3 clicked');
            // enter code here
            showArticle(3);
        });
    } else {
        home3.style.display = "none";
        home4.style.display = "none";
        home5.style.display = "none";
        body.style.cursor = 'auto';
    }
});


// Mobile Javascript
var ts;
$(document).bind('touchstart', function (e) {
    ts = e.originalEvent.touches[0].clientY;
});

$(document).bind('touchend', function (e) {
    var te = e.originalEvent.changedTouches[0].clientY;
    if (ts > te + 5) {
        if (count >= 3) {
            count = 3;
        } else {
            count += 1;
        }
        overlay.className = "animated fadeOut";
        overlayStatus = false;

    } else if (ts < te - 5) {
        if (count <= 0) {
            count = 0;
        } else {
            count -= 1;
        }
    }

    if (count === 0 && overlayStatus === false && articleStatus === false) {
        overlay.style.display = "block";
        overlay.className = "animated fadeInDown";
        overlayStatus = true;
    } else if (count <= 1 && articleStatus === false) {
        home0.style.display = "block";
        home1.style.display = "none";
        // home2.style.display = "none";
    } else if (count === 2 && articleStatus === false) {
        home0.style.display = "none";
        home1.style.display = "block";
        // home2.style.display = "none";
    } else if (count === 3 && articleStatus === false) {
        home0.style.display = "none";
        home1.style.display = "none";
        // home2.style.display = "block";
    }
});


