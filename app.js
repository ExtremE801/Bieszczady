const ZDJ = document.querySelectorAll(".zdj img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup_close")
const POPUP_IMG=document.querySelector(".popup_img");
const ARROW_LEFT=document.querySelector(".popup_arrow--left");
const ARROW_RIGHT=document.querySelector(".popup_arrow--right");

let currentImgIndex;

ZDJ.forEach((zdj, index)=>{
    zdj.addEventListener("click", (e)=>{
        POPUP.classList.remove("hidden");
        POPUP_IMG.src= e.target.src;
        currentImgIndex = index;
    });

});

POPUP_CLOSE.addEventListener("click",()=>{
   POPUP.classList.add("hidden");
});

ARROW_RIGHT.addEventListener("click", ()=>{
    if(currentImgIndex === ZDJ.length - 1){
        currentImgIndex = 0;
    }else{
        currentImgIndex++;
    }

    POPUP_IMG.src = ZDJ[currentImgIndex].src;
});
ARROW_LEFT.addEventListener("click", ()=>{
    if(currentImgIndex === 0){
        currentImgIndex= ZDJ.length-1;
    }else{
        currentImgIndex--;
    }

    POPUP_IMG.src = ZDJ[currentImgIndex].src;
});


const myFunction = () => {};