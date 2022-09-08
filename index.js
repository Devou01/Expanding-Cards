let panel = document.querySelectorAll(".panel")


panel.forEach(function (panels){
panels.addEventListener("click", ()=>{
    removeclass()
    panels.classList.add("active")
})
})



function removeclass(){
    panel.forEach((panels)=>{
        panels.classList.remove("active")
    })
}