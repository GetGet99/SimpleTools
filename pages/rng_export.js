const RNG = (function () {
    class RNGAPI {
        constructor() { }
        /** 
         * @returns {number} A psudorandom number between 0 (inclusive) and 1 (exclusive)
         */
        rand() {
            return Math.random()
        }
        /** 
         * @param {number} from
         * @param {number} to
         * @returns {number} A psudorandom number between from (inclusive) and to (exclusive)
         */
        randrangefloat(from, to) {
            if (from > to)
                // reverse the parameter
                return this.randrangefloat(to, from)
            return this.rand() * (to - from) + from
        }
        /** 
         * @param {number} from
         * @param {number} to
         * @returns {number} A psudorandom number between from (inclusive) and to (inclusive)
         */
        randrangeint(from, to) {
            if (from > to)
                // reverse the parameter
                return this.randrangeint(to, from)
            // rounds up the lower bound
            from = Math.ceil(from)
            // rounds down the upper bound
            to = Math.floor(to)
            const range = to - from + 1;
            return from + Math.floor(this.rand() * range);
        }
    }
    return new RNGAPI()
})()