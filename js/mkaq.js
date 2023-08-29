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

    const regex = /(?:https?:\/\/)?(?:www\.)?mediafire\.com\/(?:view|download|file)?\/?([^/?]+)\/([^/?]+)/i;
    const match = link.match(regex);
    
    if (match) {
        const identifier = match[1];
        const filename = match[2];
        return 'https://mkaq.github.io/?a=' + identifier + '/' + filename;
    } else {
        const simplifiedRegex = /([^/?]+)\/([^/?]+)/i;
        const simplifiedMatch = link.match(simplifiedRegex);
        
        if (simplifiedMatch) {
            const identifier = simplifiedMatch[1];
            const filename = simplifiedMatch[2];
            return 'https://mkaq.github.io/?a=' + identifier + '/' + filename;
        }
        
        return 'a'; // Link passt nicht zu den erwarteten Formaten
    }
};