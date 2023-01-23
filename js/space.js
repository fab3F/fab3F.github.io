var space = window.setInterval(function(){
    let bodyH = 0;
    if(typeof document.getElementById("content") != 'undefined'){
        bodyH += document.getElementById("content").clientHeight;
    }
    if(typeof document.getElementById("home") != 'undefined'){
        bodyH += document.getElementById("home").clientHeight;
    }
    if(typeof document.getElementById("footer") != 'undefined'){
        bodyH += document.getElementById("footer").clientHeight + 2; // +2 is for border from footer
    }
    if(typeof document.getElementsByTagName("header")[0] != 'undefined'){
        bodyH += document.getElementsByTagName("header")[0].clientHeight;
    }

    let windowH = window.innerHeight;
    let diff = windowH - bodyH;
    let style = c + diff;
    let cH = 'min-height: ' + style.toString() + 'px;';
    document.getElementById("content").setAttribute("style", cH);
}, 50);

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Hier spielt die Musik!";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})