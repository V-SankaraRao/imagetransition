let image=document.querySelector(".image");
let imagewrap=document.querySelector(".image-wrap");
let leftspace=image.offsetLeft;
let original=document.getElementById("original");

original.style.width=image.offsetWidth+"px";

image.onmousemove=function(e){
    let box=(e.pageX-leftspace);
    imagewrap.style.width=box+"px";
}