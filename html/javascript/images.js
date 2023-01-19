var fullImgBox = document.getElementById("fullImgBox");
var fullImgg = document.getElementById("fullImgg");
var arr = new collection(['allianz.jpg','oldTraffold.jpg','olympic.jpg','Tele2.jpg','Tottenham.jpg', 'qatar.webp']);


function openFullImgg(pic){
    fullImgBox.style.display = "flex";
    fullImgg.src = pic;
    document.getElementById("album-grid").style.display="none"
    document.getElementById("1").style.display="none"
    document.getElementById("2").style.display="none"
    document.getElementById("3").style.display="none"
    document.getElementById("4").style.display="none"
    document.getElementById("5").style.display="none"
    document.getElementById("6").style.display="none"
    document.getElementById(".mySlides").style.display="none"
}

function closeFullImgg() {
    fullImgBox.style.display = "none";
    document.getElementById("1").style.display="inline"
    document.getElementById("2").style.display="inline"
    document.getElementById("3").style.display="inline"
    document.getElementById("4").style.display="inline"
    document.getElementById("5").style.display="inline"
    document.getElementById("6").style.display="inline"
    document.getElementById("album-grid").style.display="grid"
}