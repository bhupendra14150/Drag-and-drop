let list =document.querySelectorAll(".list");
let right=document.querySelector(".right");
let left=document.querySelector(".left");

console.log(list);


for(val of list){
    val.addEventListener("dragstart",function (e){
        console.log(val);

let select=e.target;


right.addEventListener("dragover",function(e){
    e.preventDefault();
})
right.addEventListener("drop",function(e){
    right.appendChild(select);
    select=null;
})
left.addEventListener("dragover",function(e){
    e.preventDefault();
})
left.addEventListener("drop",function(e){
    left.appendChild(select);
    select=null;
})
       
    })
}