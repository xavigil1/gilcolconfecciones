/*PARA OCULTAR EL NAVBAR*/

function doc(element) {
  return document.querySelector(element);
}

const nav = doc("nav");
const none = doc(".menu");

const mq = window.matchMedia("(max-width: 912px)")

mq.addEventListener("change", ()=>{
  if(mq.matches){
    nav.addEventListener("mouseenter", ()=>{
        nav.style.height = "100%";
        setTimeout(()=> none.style.display = "initial",200)
    })

    nav.addEventListener("mouseleave", ()=>{
        nav.style.height = "78px";
        none.style.display = "none"   
    })  
  }

  else{
    nav.addEventListener("mouseleave", ()=>{
        nav.style.height = "100%";
        none.style.display = "initial"   
    })
  }

})
