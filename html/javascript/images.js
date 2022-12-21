var fullImgBox = document.getElementById("fullImgBox");
var fullImgg = document.getElementById("fullImgg");
var arr = new collection(['city.jpg','logo.png','naturbild.gif']);


function openFullImgg(pic){
    fullImgBox.style.display = "flex";
    fullImgg.src = pic;
    

    
}

function closeFullImgg() {
    fullImgBox.style.display = "none";
}