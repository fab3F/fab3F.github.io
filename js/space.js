function space(){
    let content = document.getElementById("content");
    let home = document.getElementById("home");
    let footer = document.getElementById("footer");
    let header = document.getElementsByTagName("header")[0];

    if(content && home){
        let c = content.offsetHeight;
        let h = home.offsetHeight;
        let f = footer.offsetHeight;
        let bodyH = c + h + f;
        if(header){
            bodyH = c + h + f + header.offsetHeight;
        }
        let windowH = window.innerHeight;
        let diff = windowH - bodyH;
        let style = c + diff;
        content.style.minHeight = style + "px";
    }
    
}

space();
window.addEventListener("resize", space);

/* Das ist um den Titel zu ändern, wenn man in einen anderen Tab geht
let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Hier spielt die Musik!";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})
*/