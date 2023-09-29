let bars = document.getElementById("bars")
let menu = document.getElementById("menu")
let close = document.getElementById("close")
let nav =document.getElementById("navbar")

bars.onclick = function (){
    menu.style.marginTop = "11vh"
    bars.style.display = "none"
    close.style.display = "block"
    menu.style.opacity = "1"
    nav.classList.add("nav-active")
}
close.onclick =function (){
    menu.style.marginTop = "-600px"
    menu.style.opacity = "0"
    bars.style.display = "block"
    close.style.display = "none"
    menu.style.opacity = "0"
    nav.classList.remove("nav-active")
}
 
let bottom =document.getElementById("bottom")
let jumbo =document.getElementById("jumbo")
let thumb = document.querySelectorAll(".thumb")
let next=document.getElementById("left")
let before= document.getElementById("right")
let jumlah =0
let jumlah2 =thumb.length


// alert(thumb[3])

bottom.addEventListener("click",function (e){
    if(e.target.className == "thumb"){
        jumbo.src = e.target.src
        jumbo.classList.add("jumbo-active")
        setTimeout(() => {
            jumbo.classList.remove("jumbo-active")
        }, 200);

        thumb.forEach(function(p){
            p.className = "thumb"
        })

        e.target.classList.add("jumbo-active2")
    }

})

function src (){
    for (let i = 0;i < thumb.length;i++){
        if(jumbo.src == thumb[i].src){
            thumb[i].classList.add("jumbo-active2")
        }
    }
}
function ilang (){
    for (let i = 0;i < thumb.length;i++){
        if(jumbo.src == thumb[i].src){
            thumb[i].classList.remove("jumbo-active2")
        }
    }
}

next.addEventListener("click",function(){
    
    for (let i = 0;i < thumb.length;i++){
        if (jumbo.src == thumb[i].src){
            ilang()
            jumbo.src = thumb[i + 1].src
            return src()
            
        }
    }
  
       
})
before.addEventListener("click",function(){
    for (let i = 0;i < thumb.length;i++){
        if (jumbo.src == thumb[i].src){
            ilang()
            jumbo.src = thumb[i - 1].src
            return src()
        }
    }
       
})

// next.addEventListener("click",function(){
  
//     jumbo.src = thumb[jumlah+1].src
//     src()
//     jumlah++
    
// })
// ilang()
// before.addEventListener("click",function(){
//     for (let i = 0;i < thumb.length;i++){
//         if(jumbo.src == thumb[i].src){
//             ilang()
//         }
//     }
//     jumbo.src = thumb[jumlah-1].src
//     src()
//     jumlah--
// })






