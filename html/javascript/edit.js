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
    const submit = document.getElementById('submit')[0];
    let titleInput = document.getElementById('titleInput').value;
    let message = document.getElementById('commentInput').value;
    if (submit == '1'){
        titleInput = $(".title2").innerHTML;
        message = $(".comment2").innerHTML;
    }
    console.log(titleInput);
    console.log(message);
    document.getElementById("submit").style.display = "none";
    document.querySelector(".modal-box").style.display = "none";
}
