// copy output
document.getElementById("copy").addEventListener("click", function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copy").innerHTML = "Kopiert!";
});


window.addEventListener('load', function(){
    let inputField = this.document.getElementById('input');
    inputField.oninput = function() {
        document.getElementById("copy").innerHTML = "Kopieren";
        let url = validationChecker(inputField.value);
        if(url === 'a'){
            document.getElementById('output').value = "Der eingegebene Link ist nicht gültig."
        }else{
            document.getElementById('output').value = url;
        }
    }


});

var validationChecker = function(link) {

    if(!link){
        return 'a';
    }

    link = link.replace('http://', 'https://');


    const long = /(?:http[s]?:\/\/)?(?:www\.)?mediafire\.com(?:\/\w+)?\/?([A-Za-z0-9]+)/;
    const match_long = link.match(long);

    if (match_long && match_long[1]) {
        return 'https://mkaq.github.io/?a=' + match_long[1];
    }


    const short = /^(https?:\/\/)?(www\.)?mediafire\.com\/\?[a-zA-Z0-9]+$/m;
    const ident = /^[a-zA-Z0-9]+$/m;
    const matchIdentifier = (pattern) => {
        const match = link.match(pattern);
        return match ? match[1] : 'a';
    };


    let identifier = 'a';

    if (ident.test(link)) {
        identifier = 'https://mkaq.github.io/?a=' + url;
    } else if (short.test(link)) {
        identifier = 'https://mkaq.github.io/?a=' + matchIdentifier(/mediafire\.com\/\?([a-zA-Z0-9]+)/);
    }

    return identifier;
};