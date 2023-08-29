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


    const regex1 = /(?:https?:\/\/)?(?:www\.)?mediafire\.com\/(?:view|download|file)?\/?([^/?]+)\/([^/?]+)/i;
    const match1 = link.match(regex1);
    
    if (match1) {

        const identifier1 = match1[1];
        const filename1 = match1[2];

        return 'https://mkaq.github.io/?a=' + identifier1 + '/' + filename1;

    } else {

        const regex2 = /^(.*?)\/(.*?)$/;
        const match2 = link.match(regex2);

        if (match2) {
            const identifier2 = match2[1];
            const filename2 = match2[2];

            return 'https://mkaq.github.io/?a=' + identifier2 + '/' + filename2;
            
        } else{
            return 'a'; // Link passt nicht zu den erwarteten Formaten
        }

    
    }
};