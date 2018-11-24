let counter = 0;
let auto = false;
let stopOnMouseOver = true;

const slides = document.getElementById('sliderItems');
const sliderWrapper = document.getElementById('sliderWrapper');
const sliderLength = slides.children.length;

let right = document.querySelector('.right').onclick = slider;
let left = document.querySelector('.left').onclick = slider;

function slider(e) {

    let left = e.path[0].classList.contains('left');
    let right = e.path[0].classList.contains('right');

    if (left && counter >=1) {
        if (counter > 1) {
            counter -= 2
        } else {
            counter -= 1
        }
        list(counter, slides);
        counter++;
    } else {
        if (right){
            if (counter <=sliderLength && counter >=0){
                if (counter === 0) {
                    ++counter
                }
                list(counter, slides);
                ++counter;
            }
            if (counter >sliderLength || counter<0) {
                counter = 0;
                list(counter, slides);
            }
        }
    }
}
function list (elem, item) {
    item.style.transform = "translateX("+-(elem)+"00%)";
}
sliderWrapper.onmouseenter = function () {
    stopOnMouseOver = false;
};
sliderWrapper.onmouseleave = function () {
    stopOnMouseOver = true;
};

let autoPlay = function (settings1, setting2){
    if (settings1 && setting2){
        if (counter <=sliderLength){
            if (counter === 0) {
                ++counter
            }
            list(counter, slides);
            ++counter;
        }
        if (counter >sliderLength) {
            counter = 0;
            list(counter, slides);
        }
    }

};

setInterval("autoPlay(auto, stopOnMouseOver)", 4000);


