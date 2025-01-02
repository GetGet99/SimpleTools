'use strict';
/** @type {HTMLInputElement} */
const switchbtn = (document.getElementById("switchbtn"))
/** @type {HTMLInputElement} */
const lefttb = (document.getElementById("lefttb"))
/** @type {HTMLInputElement} */
const righttb = (document.getElementById("righttb"))
/** @type {HTMLInputElement} */
const copybtn = (document.getElementById("copybtn"))
/**
 * @typedef {{show: function(): void }} BootstrapModal
 */
/**
 * @type {BootstrapModal}
 */
const errormodal = new bootstrap.Modal(document.getElementById('errormodal'), {})
/** @type {HTMLDivElement} */
const errortext = (document.getElementById('errortext'))
/** @type {function(): void} */
let switchMode;
/** @type {function(): void} */
let switchToAtoB;
/** @type {function(): void} */
let switchToBtoA;
/** @type {function(): void} */
let updateValue;
/** @type {function(): "atob" | "btoa"} */
let getCurrentMode;
/** @type {function(): void} */
let copyToClipboard;
(function () {
    const base64A = "Base 64 (A)"
    const normalTextB = "Normal Text (B)"
    /** @type {"atob" | "btoa"} */
    let _currentMode = "btoa"
    getCurrentMode = function () {
        return _currentMode;
    }
    switchMode = function () {
        if (_currentMode == "atob") {
            switchToBtoA()
        } else {
            switchToAtoB()
        }
    }
    switchToAtoB = function () {
        _currentMode = "atob"
        lefttb.placeholder = base64A
        righttb.placeholder = normalTextB
        updateValue()
    }
    switchToBtoA = function () {
        _currentMode = "btoa"
        lefttb.placeholder = normalTextB
        righttb.placeholder = base64A
        updateValue()
    }
    updateValue = function () {
        if (_currentMode == "atob") {
            try {
                righttb.value = atob(lefttb.value)
            } catch {
                righttb.value = "Error: Invalid Base 64 value"
            }
        } else {
            righttb.value = btoa(lefttb.value)
        }
    }
    switchbtn.onclick = switchMode;
    lefttb.onchange = updateValue;
    lefttb.oninput = updateValue;

    lefttb.focus()
    copybtn.click = copyToClipboard;
    copyToClipboard = function () {
        
        navigator.clipboard.writeText(righttb.value).then(function () {
            
        }, function (err) {
            myModal.show()
            console.error('Async: Could not copy text: ', err);
        });
    }
})()