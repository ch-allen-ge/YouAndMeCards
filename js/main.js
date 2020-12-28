function start() {
    var imgArray = document.querySelectorAll("img");
    console.log(imgArray);
    for (i = 0; i < imgArray.length; i++) {
        imgArray[i].onclick = makeid;
    }

};

function makeid() {
    var length = 10;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    var elem = document.querySelector("#textBox");
    elem.innerHTML = result;
    console.log(result);
}