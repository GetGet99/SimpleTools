'use strict';
/** @type {HTMLButtonElement} */
const copyBtn = (document.getElementById("copyBtn"))
/** @type {HTMLButtonElement} */
const lowercase = (document.getElementById("lowercase"))
/** @type {HTMLButtonElement} */
const uppercase = (document.getElementById("uppercase"))
/** @type {HTMLButtonElement} */
const swappingcase = (document.getElementById("swappingcase"))
/** @type {HTMLButtonElement} */
const randomcase = (document.getElementById("randomcase"))
/** @type {HTMLTextAreaElement} */
const inouttext = (document.getElementById("inouttext"))
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
let copyToClipboard;
(function () {
    inouttext.focus()
    copyBtn.onclick = copyToClipboard
    /**
     * 
     * @param {function(string): string} func 
     */
    function transform(func) {
        const sstart = inouttext.selectionStart
        const send = inouttext.selectionEnd
        const sdir = inouttext.selectionDirection
        inouttext.value = func(inouttext.value)
        inouttext.focus()
        inouttext.setSelectionRange(sstart, send, sdir)
    }
    lowercase.onclick = function () {
        transform(CASES.lowercase)
    }
    uppercase.onclick = function () {
        transform(CASES.uppercase)
    }
    swappingcase.onclick = function () {
        transform(CASES.swappingcase)
    }
    randomcase.onclick = function () {
        transform(CASES.randomcase)
    }
    copyToClipboard = function () {
        navigator.clipboard.writeText(righttb.value).then(function () {
            
        }, function (err) {
            errormodal.show()
            console.error('Async: Could not copy text: ', err);
        });
    }
    
})()