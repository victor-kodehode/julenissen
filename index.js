


const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove",(e) => {
    cursor.style.left = e.pageX + "px";
     cursor.style.top = e.pageY + "px";
     cursor.setAttribute("data-fromTop", (cursor.offsetTop - scrollY))
});

window.addEventListener("scroll",()=>{
    const fromTop = parseInt(cursor.getAttribute("dat-fromTop"));
    cursor.style.top = scrollY + fromTop + "px";

})

window.addEventListener("click",() =>{
  if (cursor.classList.contains("click")){
    cursor.classList.remove("click")
    // Triggering a dom reflow
    void cursor.offsetWidth; 
    cursor.classList.add("click");
}else{
    cursor.classList.add("click")
 }  
})