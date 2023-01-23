function space(){
    let content = document.getElementById("content");
    let home = document.getElementById("home");
    let footer = document.getElementById("footer");
    let header = document.getElementsByTagName("header")[0];

    if(content && home){
        let c = content.clientHeight;
        let h = home.clientHeight;
        let f = footer.clientHeight + 2; // +2 is for border from footer
        let bodyH = c + h + f;
        if(header){
            bodyH = c + h + f + header.clientHeight;
        }
        let windowH = window.innerHeight;
        let diff = windowH - bodyH;
        let style = c + diff;
        content.style.minHeight = style + "px";
    }
}

space();
window.addEventListener("resize", space);

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Hier spielt die Musik!";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})