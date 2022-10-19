var sidebarButton = document.getElementById("sidebar-button")
var sidebar = document.getElementById("sidebar")
var topbar = document.getElementById("topbar")
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



function setupTopbar() {
    if (isMobile) {
        topbar.remove()
        return    
    }
    let sections = content.children
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        let newElem = document.createElement("div")
        newElem.innerHTML = "<div>"+section.getAttribute("name")+"</div>"
        
        topbar.appendChild(newElem)
    }
}

setupTopbar()

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}