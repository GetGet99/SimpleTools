// prevent variables from being exported
(function () {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkScheme) {
        document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", "dark")
        // document.body.classList.add("bg-dark");
    }
    const backIcon = document.createElement("i")
    backIcon.className = "bi bi-arrow-left"
    const backbtn = document.createElement("a");
    backbtn.classList.add("btn")
    backbtn.classList.add("btn-outline-primary")
    backbtn.classList.add("text-white")
    backbtn.classList.add("m-4")
    backbtn.classList.add("mb-0")
    backbtn.appendChild(backIcon);
    backbtn.href = "../index.html"
    const titlehead = document.createElement("h1");
    titlehead.classList.add("text-center")
    titlehead.classList.add("p-5")
    titlehead.classList.add("pt-0")
    document.title = `Simple Tools - ${document.title}`;
    titlehead.innerText = document.title;
    document.body.insertAdjacentElement("afterbegin", titlehead)
    document.body.insertAdjacentElement("afterbegin", backbtn)
    document.body.style.overflowX = "hidden"
})()