let sidebarButton = document.getElementById("sidebar-button")
let sidebar = document.getElementById("sidebar")
let closeNMButton = document.querySelector("#sc-warn > button")

let isSidebarOpened = false
sidebarButton.addEventListener('click', ()=>{
    sidebar.style.left = isSidebarOpened ? "-190px" : "0px"
    isSidebarOpened = !isSidebarOpened
})

closeNMButton.addEventListener('click', ()=>{
    document.querySelector("#sc-warn").remove()
    document.querySelector("#sc-warn-bg").remove()
})

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}