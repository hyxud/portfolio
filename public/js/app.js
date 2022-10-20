var sidebarButton = document.getElementById("sidebar-button")
var sidebar = document.getElementById("sidebar")
var content = document.getElementById("content")
var closeNMButton = document.querySelector("#sc-warn > button")

var isSidebarOpened = false


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