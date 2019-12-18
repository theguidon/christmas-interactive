const overlay = document.getElementById("overlay");
const home0 = document.getElementById("home0");
const home1 = document.getElementById("home1");

const article = document.getElementById("article")

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


(function () {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism
        const x = event.pageX;
        const y = event.pageY;
        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (x == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            x = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            y = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0);
        }
        // Use event.pageX / event.pageY here
        console.log(x, y);

    }
})();

const showArticle = (articleNum) => {
    const article = document.getElementById(`article-${articleNum}`);
    article.style.display = "block";
    console.log(article.style.display)
    article.className += article.classList.includes('animated') && article.classList.includes('fadeDown') ? "" : " animated fadeDown";

    console.log(document.getElementById('article-1').style.display)

}