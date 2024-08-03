let cont = 1;
document.getElementById("radio1").checked = true;

function nextImage(){
    cont++;
    if(cont>3){
        cont = 1;
    }
    document.getElementById("radio" + cont).checked = true;
}

setInterval(function(){
    nextImage();
}, 5000)