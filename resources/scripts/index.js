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

var mySVG = document.getElementById("svgw");
var svgDoc;
 mySVG.addEventListener("load",function() {
      svgDoc = mySVG.contentDocument;
      console.log("SVG contentDocument Loaded!", svgDoc);
 }, false);

var ornament1L;
var ornament1T;
var ornament1R;
var ornament1B;

var ornament2L;
var ornament2T;
var ornament2R;
var ornament2B;

var ornament3L;
var ornament3T;
var ornament3R;
var ornament3B;
const onScrollDown = () => {
    overlay.className = "animated fadeOut";
    count = 5;
    overlayStatus = false;
    // console.log('called')
    // document.getElementById("svgw").style.display = ""
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
    document.getElementById("svgw").style.display = "none"
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
    // body.style.backgroundImage = "url('./resources/images/wallpaper2TEST.svg')";
    document.getElementById("svgw").style.display = ""
    body.style.backgroundImage = "none";
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

    var or1 = svgDoc.getElementById('Ornament 1').getBoundingClientRect();
    var or2 = svgDoc.getElementById('Ornament 2').getBoundingClientRect();
    var or3 = svgDoc.getElementById('Ornament 3').getBoundingClientRect();

    // gets the coordinates of each ornament for any screen size
    ornament1L = or1.left;
    ornament1T = or1.top;
    ornament1R = or1.right;
    ornament1B = or1.bottom;

    ornament2L = or2.left;
    ornament2T = or2.top;
    ornament2R = or2.right;
    ornament2B = or2.bottom;

    ornament3L = or3.left;
    ornament3T = or3.top;
    ornament3R = or3.right;
    ornament3B = or3.bottom;


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

        // ornament1T  = window.pageYOffset || ornament1T.scrollTop,
        // ornament1L = window.pageXOffset || ornament1L.scrollLeft;
        // ornament1L = (window.pageXOffset || ornament1L.scrollLeft) - (ornament1L.clientLeft || 0);
        // ornament1T = (window.pageYOffset || ornament1T.scrollTop)  - (ornament1T.clientTop || 0);
    }

    console.log(
        "x:", x,
         "y:", y,
         "viewport w", Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
         "vieport h",  Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
            );
    
    // if ((360 >= x && x >= 280) && (740 >= y && y >= 660) && !overlayStatus && count >= 75 && articleStatus === false) {
    //     home3.style.display = "block";
    //     body.style.cursor = "pointer";
    //     home4.style.display = "none";
    //     home5.style.display = "none";
    //     overlay.style.display = "none";

    //     $(home3).bind('click touchstart', e => {
    //         console.log('Ornament 1 clicked');
    //         // enter code here
    //         showArticle(1);

    //     });
    // } else if ((440 >= x && x >= 360) && (880 >= y && y >= 800) && !overlayStatus && count >= 75 && articleStatus === false) {
    //     home4.style.display = "block";
    //     body.style.cursor = 'pointer';
    //     home3.style.display = "none";
    //     home5.style.display = "none";
    //     overlay.style.display = "none";

    //     $(home4).bind('click touchstart', e => {
    //         console.log('Ornament 2 clicked');
    //         // enter code here
    //         showArticle(2);
    //     });
    // } else if ((540 >= x && x >= 450) && (700 >= y && y >= 620) && !overlayStatus && count >= 75 && articleStatus === false) {
    //     home5.style.display = "block";
    //     body.style.cursor = 'pointer';
    //     home4.style.display = "none";
    //     home3.style.display = "none";
    //     overlay.style.display = "none";

    //     $(home5).bind('click touchstart', e => {
    //         console.log('Ornament 3 clicked');
    //         // enter code here
    //         showArticle(3);
    //     });
    // } else {
    //     home3.style.display = "none";
    //     home4.style.display = "none";
    //     home5.style.display = "none";
    //     body.style.cursor = 'auto';
    // }

    // using dynamic coordinates
    if ((ornament1B >= x && x >= ornament1T) && (ornament1R >= y && y >= ornament1L) && !overlayStatus && count >= 75 && articleStatus === false) {
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

const logCoordinates = () => {
    console.table({
        "ornament 1": {"left": ornament1L, "top":ornament1T, "right": ornament1R, "bottom": ornament1B}, 
        "ornament 2":{"left": ornament2L, "top":ornament2T, "right": ornament2R, "bottom": ornament2B}, 
        "ornament 3": {"left": ornament3L, "top":ornament3T, "right": ornament3R, "bottom": ornament3B}
    });
}

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