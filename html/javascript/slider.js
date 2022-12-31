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