function space() {
    let content = document.getElementById("content");
    let home = document.getElementById("home");
    let footer = document.getElementById("footer");
    let header = document.getElementsByTagName("header")[0];

    if (content && home && footer) {
        let c = content.getBoundingClientRect().height;
        let h = home.getBoundingClientRect().height;
        let f = footer.getBoundingClientRect().height;
        
        let bodyH = c + h + f;
        if (header) {
            bodyH += header.getBoundingClientRect().height;
        }
        
        let windowH = window.innerHeight;

        if (windowH > bodyH) {
            let diff = windowH - bodyH;
            let style = c + diff - 1; 
            content.style.minHeight = style + "px";
        } else {
            content.style.minHeight = "auto"; 
        }
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