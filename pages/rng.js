'use strict';
/** @type {HTMLInputElement} */
const fromtb = (document.getElementById("fromtb"))
/** @type {HTMLInputElement} */
const totb = (document.getElementById("totb"))
/** @type {HTMLInputElement} */
const righttb = (document.getElementById("righttb"))
/** @type {HTMLButtonElement} */
const genCounttb = (document.getElementById("genCounttb"))
/** @type {HTMLButtonElement} */
const genBtn = (document.getElementById("genBtn"))
/** @type {HTMLButtonElement} */
const copyBtn = (document.getElementById("copyBtn"))
/** @type {HTMLButtonElement} */
const intModeBtn = (document.getElementById("intModeBtn"))
/** @type {HTMLButtonElement} */
const floatModeBtn = (document.getElementById("floatModeBtn"))
/** @type {HTMLButtonElement} */
const clearBtn = (document.getElementById("clearBtn"))
/** @type {HTMLTextAreaElement} */
const autoClearBtn = (document.getElementById("autoClearBtn"))
/** @type {HTMLTextAreaElement} */
const output = (document.getElementById("output"))
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
let switchToInt;
/** @type {function(): void} */
let switchToFloat;
/** @type {function(): void} */
let autoClearOn;
/** @type {function(): void} */
let autoClearOff;
/** @type {function(): void} */
let toggleAutoClear;
/** @type {function(): boolean} */
let getAutoClearMode;
/** @type {function(): void} */
let generateValue;
/** @type {function(): "int" | "float"} */
let getCurrentMode;
/** @type {function(): void} */
let copyToClipboard;
/** @type {function(): void} */
let clearOutput;
(function () {
    /** @type {"int" | "float"} */
    let _currentMode = "int"
    /** @type {boolean} */
    let _autoClear = true
    getCurrentMode = function () {
        return _currentMode;
    }
    switchToInt = function () {
        _currentMode = "int"
        intModeBtn.classList.remove("btn-outline-primary")
        intModeBtn.classList.add("btn-primary")
        floatModeBtn.classList.remove("btn-primary")
        floatModeBtn.classList.add("btn-outline-primary")
        totb.placeholder = "To"
    }
    switchToFloat = function () {
        _currentMode = "float"
        floatModeBtn.classList.remove("btn-outline-primary")
        floatModeBtn.classList.add("btn-primary")
        intModeBtn.classList.remove("btn-primary")
        intModeBtn.classList.add("btn-outline-primary")
        totb.placeholder = "To (Exclusive)"
    }
    generateValue = function () {
        const from = parseFloat(fromtb.value)
        const to = parseFloat(totb.value)
        const genCount = parseInt(genCounttb.value)
        const wasEmpty = _autoClear || output.value == ""
        let outStr = ""
        if (_currentMode == "int") {
            for (let i = 0; i < genCount; i++) {
                outStr += "\n" + RNG.randrangeint(from, to).toString()
            }
        } else {
            for (let i = 0; i < genCount; i++) {
                outStr += "\n" + RNG.randrangefloat(from, to).toString()
            }
        }
        if (wasEmpty) {
            // removes the first \n
            outStr = outStr.substring(1)
        }
        if (_autoClear)
            output.value = outStr
        else
            output.value += outStr
    }
    getAutoClearMode = function() {
        return _autoClear
    }
    autoClearOn = function() {
        _autoClear = true
        autoClearBtn.innerText = "Auto Clear: On"
        autoClearBtn.classList.remove("btn-outline-primary")
        autoClearBtn.classList.add("btn-primary")
    }
    autoClearOff = function() {
        _autoClear = false
        autoClearBtn.innerText = "Auto Clear: Off"
        autoClearBtn.classList.remove("btn-primary")
        autoClearBtn.classList.add("btn-outline-primary")
    }
    toggleAutoClear = function() {
        if (_autoClear)
            autoClearOff()
        else
            autoClearOn()
    }
    clearOutput = function () {
        output.value = ""
    }
    
    fromtb.focus()
    copyBtn.onclick = copyToClipboard
    genBtn.onclick = generateValue
    floatModeBtn.onclick = switchToFloat
    intModeBtn.onclick = switchToInt
    clearBtn.onclick = clearOutput
    autoClearBtn.onclick = toggleAutoClear
    copyToClipboard = function () {
        navigator.clipboard.writeText(righttb.value).then(function () {
            
        }, function (err) {
            errormodal.show()
            console.error('Async: Could not copy text: ', err);
        });
    }
    
})()