let image = document.querySelector('.img');

const imgArray = ["assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg", "assets/images/5.jpg"];

image.setAttribute("src", imgArray[0]);

function next() {
    let currentImage = image.getAttribute("src");
    let index = imgArray.indexOf(currentImage);
    if (index < imgArray.length - 1) {
        index++;
    } else {
        index = 0;
    }
    image.setAttribute("src", imgArray[index]);
}

function previous() {
    let currentImage = image.getAttribute("src");
    let index = imgArray.indexOf(currentImage);
    if (index > 0) {
        index--;
    } else {
        index = imgArray.length - 1;
    }
    image.setAttribute("src", imgArray[index]);
}