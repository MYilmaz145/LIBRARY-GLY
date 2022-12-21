var slider_img = document.querySelector('.urspår');
var images = ['city.jpg','logo.png','naturbild.gif','new-york.jpg'];
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