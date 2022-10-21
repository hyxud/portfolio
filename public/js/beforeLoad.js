const loadText = document.querySelector(".loading-div-text")
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        loadText.innerHTML = "Load Complete"
        loadText.classList.add("text-loaded-anim")
        setTimeout(()=>{
            document.getElementById("loading-div").remove()
            onLoad()
        }, 1000)
    }
}