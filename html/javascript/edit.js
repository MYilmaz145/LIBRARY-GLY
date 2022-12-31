document.getElementById("edit-btn").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})

document.getElementById("edit-btn1").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})

document.getElementById("edit-btn2").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})

function submitText(){
    let titleInput = document.getElementById('titleInput').value;
    let message = document.getElementById('commentInput').value;
    console.log(titleInput);
    console.log(message);
    document.getElementById("submit").style.display = "none";
    document.querySelector(".modal-box").style.display = "none";
}
