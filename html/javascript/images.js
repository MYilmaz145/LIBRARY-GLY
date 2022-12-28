var fullImgBox = document.getElementById("fullImgBox");
var fullImgg = document.getElementById("fullImgg");
var arr = new collection(['city.jpg','logo.png','naturbild.gif']);


function openFullImgg(pic){
    fullImgBox.style.display = "flex";
    fullImgg.src = pic;
    document.getElementById("1").style.display="none"
    document.getElementById("2").style.display="none"
    document.getElementById("3").style.display="none"
}

function closeFullImgg() {
    fullImgBox.style.display = "none";
    document.getElementById("1").style.display="inline"
    document.getElementById("2").style.display="inline"
    document.getElementById("3").style.display="inline"
}