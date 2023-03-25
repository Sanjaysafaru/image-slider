const carousel = document.querySelector(".carousel");
const first_img = carousel.querySelectorAll(".carousel img")[0];
arrowicons = document.querySelectorAll(".icon");

let isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideicons = () =>{
    let scrollwidth = carousel.scrollWidth - carousel.clientWidth;
    arrowicons[0].style.display = (carousel.scrollLeft == 0) ? "none" : "flex";
    arrowicons[1].style.display = (Math.round(carousel.scrollLeft)  == scrollwidth) ? "none" : "flex";
}

arrowicons.forEach(icon => {
    icon.addEventListener("click", () =>{
        let firstimgwidth = first_img.clientWidth + 10;
        carousel.scrollLeft += icon.id ==="left" ? -firstimgwidth : firstimgwidth;
        setTimeout(() => showHideicons(), 50);
    });
});

// const autoSlide = () => {
//     // positionDiff = Math.abs(positionDiff);
//     let firstimgwidth = first_img.clientWidth + 10;
//     let valDifference =  firstimgwidth - positionDiff;

//     if(carousel.scrollLeft > prevScrollLeft){
//         return carousel.scrollLeft += (positionDiff > (firstimgwidth/3)) ? valDifference :(-positionDiff);
//     }
//     carousel.scrollLeft -= (positionDiff > (firstimgwidth/3)) ? valDifference : (-positionDiff);
// }

const dragStart = (e) => {
    isDragging = true;
    prevPageX = e.pageX || e.touches[0].pageX; 
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
        if(!isDragging) return;
        e.preventDefault();
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        carousel.classList.add("dragging");
        showHideicons(); 
    }
const dragStop = () => { 
        isDragging = false;
        carousel.classList.remove("dragging");
        // autoSlide();
    }
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);


// const carousel = document.querySelector(".tabs-box");
// arrowicons = document.querySelectorAll(".icon img");
// const alltabs = document.querySelectorAll(".tab");

 
// let isDragging = false;

// const handleicons = () => {
//     let scrollval = Math.round(carousel.scrollLeft);
//     let maxscrollablewidth = carousel.scrollWidth - carousel.clientWidth;
//     arrowicons[0].parentElement.style.display = scrollval > 0 ? "flex" : "none";
//     arrowicons[1].parentElement.style.display = maxscrollablewidth == scrollval  ? "none" : "flex";
// }

// alltabs.forEach(tab => {
//     tab.addEventListener("click", () => {
//         carousel.querySelector(".active").classList.remove("active");
//         tab.classList.add("active");
//     });
// });

// arrowicons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         carousel.scrollLeft += icon.id === "left" ? -300 : 300;
//         setTimeout(() => handleicons(), 50);
//     }); 
// });

// const dragging = (e) => {
//     if(!isDragging) return;
//     carousel.scrollLeft -= e.movementX;
//     carousel.classList.add("dragging");
//     handleicons();
// }
// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
// }

// carousel.addEventListener("mousedown", () => isDragging = true);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);