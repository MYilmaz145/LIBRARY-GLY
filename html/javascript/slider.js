var slider_img = document.querySelector('.urspår');
var images = ['allianz.jpg','oldTraffold.jpg','olympic.jpg','Tele2.jpg','Tottenham.jpg', 'qatar.webp'];
var i = 0;

function prevPage(){
    if(i <= 0) i = images.length;
    i--;
    return setImage();
    
}

function nextPage(){
    if(i >= images.length-1 ) i = -1;
    i++;
    return setImage();
    


}

function setImage(){
    return slider_img.setAttribute('src', '/html/images/'+images[i]);

}

var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox');
for(var checkbox of checkboxes){
    checkbox.addEventListener('click', function(){
        if(this.checked == true){
            var id = this.id;
            switchOnId(id);
            
        } else {
            listArray = listArray.filter(e => e !== this.id);
            
        }
    })
}
function switchOnId(id){
    const ids = id;
    switch(ids){
        case "check1":
        listArray.push(document.getElementById("p1"));
        
        break;
        
        case "check2":
        listArray.push(document.getElementById("p2"));
        break;
        
        case "check3":
        listArray.push(document.getElementById("p3"));
        break;

        case "check4":
        listArray.push(document.getElementById("p4"));
        break;

        case "check5":
        listArray.push(document.getElementById("p5"));
        break;

        case "check6":
        listArray.push(document.getElementById("p6"));
        break;
        
        default:
            break;   
    } 
}

function showSlideShow(){
    const array = listArray.slice();
    listArray = [];
    const slideelement = document.getElementById("slideshow");
    let counter = 0;
    let elementCounter = document.querySelectorAll(".mySlides");
    array.forEach(element => {
        const imgelement = document.createElement("img");
        imgelement.className = 'mySlides';
        imgelement.src = element.src;
        if (counter == 0 && elementCounter.length == 0){ 
        imgelement.style.display = "block";
        }
        else { 
        imgelement.style.display = "none";
        }
        counter++;
        slideelement.appendChild(imgelement);
    });
    
}
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n);
  }

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
 
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function clearContent(){
    document.getElementById("slideshow").style.display = "none"; 
}