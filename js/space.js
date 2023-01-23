var space = window.setInterval(function(){

    //if theres no nav bar, space will not update
    if(typeof document.getElementsByTagName("nav")[0] === 'undefined'){
        stop_space();
        return;
    } 
    let c = document.getElementById("content").clientHeight;
    let h = document.getElementById("home").clientHeight;
    let f = document.getElementById("footer").clientHeight + 2; // +2 is for border from footer

    let bodyH = c + h + f;

    let head = document.getElementsByTagName("header")[0];
    if(typeof head != 'undefined'){
        bodyH = c + h + f + head.clientHeight;
    }

    let windowH = window.innerHeight;
    let diff = windowH - bodyH;
    let style = c + diff;
    let cH = 'min-height: ' + style.toString() + 'px;';
    document.getElementById("content").setAttribute("style", cH);
}, 10);

function stop_space(){
    clearInterval(space);
}

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Hier spielt die Musik!";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})