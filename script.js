let closed=document.querySelector("#closed");
let menu=document.querySelector("#menu");
let nav=document.querySelector("nav");
let home=document.querySelector("#home");
let _new=document.querySelector("#new");
let popular=document.querySelector("#popular");
let trending=document.querySelector("#trending");
let categories=document.querySelector("#categories");


console.log(closed);
console.log(menu);
console.log(nav);

let screenSize=window.matchMedia("(max-width:750px)");
console.log(screenSize.matches);



function toggel(){
   if(screenSize.matches){
    nav.classList.toggle("nav");
   }
}
menu.addEventListener("click",()=>{
    toggel();
})

closed.addEventListener("click",()=>{
    toggel();
})

home.addEventListener("click",()=>{
    toggel();
})
_new.addEventListener("click",()=>{
    toggel();
})
popular.addEventListener("click",()=>{
    toggel();
})
trending.addEventListener("click",()=>{
    toggel();
})
categories.addEventListener("click",()=>{
    toggel();
})