var space = window.setInterval(function(){
    let c = document.getElementById("content").clientHeight;
    let h = document.getElementById("home").clientHeight;
    let f = document.getElementById("footer").clientHeight + 2; // +2 is for border from footer

    let bodyH = c + h + f;

    let head = document.getElementsByTagName("header")[0];
    if(typeof head != 'undefined'){
        bodyH = c + h + f + head.clientHeight;
    }

    let windowH = window.innerHeight;
    let diff = 0;
    if(bodyH < windowH){
        diff = windowH - bodyH;
    }
    let style = c + diff;
    let cH = 'min-height: ' + style.toString() + 'px;';
    document.getElementById("content").setAttribute("style", cH);
}, 500);
