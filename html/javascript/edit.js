document.getElementById("1").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})
document.getElementById("2").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})
document.getElementById("3").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})
document.getElementById("4").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})
document.getElementById("5").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})
document.getElementById("6").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})


function submitText(){
    let titleInput = document.getElementById('titleInput').value;
    let message = document.getElementById('commentInput').value;
    document.getElementById("title1").innerHTML = titleInput;
    document.getElementById("comment1").innerHTML = message;
    console.log(titleInput);
    console.log(message);
    document.getElementById("submit").style.display = "none";
    document.querySelector(".modal-box").style.display = "none";
}