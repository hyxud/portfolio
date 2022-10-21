const sidebarButton = document.getElementById("sidebar-button")
const sidebar = document.getElementById("sidebar")
const topbar = document.getElementById("topbar")
const content = document.getElementById("content")
const closeNMButton = document.querySelector("#sc-warn > button")
const root = document.querySelector(':root');
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

const ObsView = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
});
const onViewAnimElems = document.querySelectorAll('[startanim]');
const onStartElems = document.querySelectorAll('[hasstartanimm]');


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
onViewAnimElems.forEach(element => {
    ObsView.observe(element, {});
});

function onLoad() {
    onStartElems.forEach(element => {
        let name = element.classList[0]
        if (element.classList[0]==undefined) {
            name = element.id
        }
        element.classList.add(name+"-start")
    })
    listTextManager()
}


const list = [
    "Web Developer",
    "Software Developer",
    "Game Developer",
    "Freelancer",
    "3D artist",
    "Designer"
]

function listTextManager() {
    let text = document.querySelector(".main-entrance-typing")
    let index = 0
    let maxIndex = list.length-1
    let typingSpeed = 1000
    root.style.setProperty('--typing-speed', typingSpeed+"ms");

    const update = ()=>{
        root.style.setProperty('--steps', list[index].length);
        text.style.width = `${list[index].length}ch`
        text.innerHTML = list[index]

        text.classList.add("typing")

        text.innerHTML = list[index]
        setTimeout(() => {
            text.classList.remove("typing")
            text.classList.add("typing-reverse")
            setTimeout(() => {
                text.innerHTML = " "
                text.classList.remove("typing-reverse")
                setTimeout(() => {
                    index = index>=maxIndex ? 0: index+1
                    update()
                }, 1000);
            }, typingSpeed-100);
        }, 3000);
    }

    update()
}