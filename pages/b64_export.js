const Base64 = (function() {
    class Base64API {
        constructor() {}
        /**
         * @param {string} data 
         * @returns {string}
         */
        atob(data) {
            return atob(data)
        }
        /**
         * @param {string} data 
         * @returns {string}
         */
        btoa(data) {
            return btoa(data)
        }
        /**
         * @param {string} data 
         * @returns {string}
         */
        text2base64(data) {
            return btoa(data)
        }
        /**
         * @param {string} data 
         * @returns {string}
         */
        base642text(data) {
            return atob(data)
        }
    }
    return new Base64API()
})()