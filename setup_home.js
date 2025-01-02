// prevent variables from being exported
(function () {
    if (window.matchMedia) {
        const preferesDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
        if (preferesDarkScheme.matches) {
            document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", "dark")
        }
        preferesDarkScheme.addEventListener('change', function() {
            if (preferesDarkScheme.matches) {
                document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", "dark")
            } else {
                document.getElementsByTagName("html")[0].removeAttribute("data-bs-theme")
            }
        })
    }
})()