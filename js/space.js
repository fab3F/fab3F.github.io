var space = window.setInterval(function(){
    let body = document.body,
        html = document.documentElement;
    let complete_height = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
    let background = document.getElementById("content");
    let h = document.getElementById("home").clientHeight;
    let f = document.getElementById("footer").clientHeight;
    let he = complete_height - h - f -2;
    if (he < 960) {
        let hei = 'min-height: ' + he.toString() + 'px;'
        background.setAttribute("style", hei);
    }
  }, 500);