// prevent variables from being exported
(function () {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkScheme) {
        document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", "dark")
    }
})()