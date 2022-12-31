var fullImgBox = document.getElementById("fullImgBox");
var fullImgg = document.getElementById("fullImgg");
var arr = new collection(['allianz.jpg','oldTraffold.jpg','olympic.jpg','Tele2.jpg','Tottenham.jpg', 'qatar.webp']);


function openFullImgg(pic){
    fullImgBox.style.display = "flex";
    fullImgg.src = pic;
    document.getElementById("edit-btn").style.display="none"
    document.getElementById("edit-btn1").style.display="none"
    document.getElementById("edit-btn2").style.display="none"
    document.getElementById("edit-btn3").style.display="none"
    document.getElementById("edit-btn4").style.display="none"
    document.getElementById("edit-btn5").style.display="none"
}

function closeFullImgg() {
    fullImgBox.style.display = "none";
    document.getElementById("edit-btn").style.display="inline"
    document.getElementById("edit-btn1").style.display="inline"
    document.getElementById("edit-btn2").style.display="inline"
    document.getElementById("edit-btn3").style.display="inline"
    document.getElementById("edit-btn4").style.display="inline"
    document.getElementById("edit-btn5").style.display="inline"
}