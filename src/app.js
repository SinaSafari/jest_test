/**
 * this functions tries to returns summation of these two numbers
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
const sumTwoNumbers = (num1, num2) => {
    if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
    throw new Error('invalid types')
}

/**
 * gets unknown number of numbers and returns summation of them
 * 
 * @param  {...number} nums 
 * @returns {number}
 */
const addMultipleNumbers = (...nums) => {
    if (!nums.length) return 0;
    if ((new Set(nums.map(x => typeof x)).size <= 1)) {
        return nums.reduce((acc, cur) => acc += cur)
    }
    throw new Error('invalid types')
}

/**
 * remove prefix provided from sentence
 * 
 * @param {string} prefix 
 * @param {string} sentence 
 * @returns {string}
 */
const removePrefix = (prefix, sentence) => {
    if (typeof sentence === "string" && typeof sentence === 'string') {
        if (sentence.startsWith("pr-")) {
            return sentence.replace("pr-", "")
        }
        throw new Error("invalid pattern");
    }
    throw new Error('invalid types')
}

/**
 * validate that the data to be string and return an object
 * 
 * @param {string} data 
 * @returns 
 */
const StringValidator = (data) => {
    if (typeof data === 'string') {
        return {
            success: true,
            message: data,
        }
    }
    throw new Error('invalid types');
}

/**
 * call cb after validating data types
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {function} cb 
 * @returns 
 */
const doAddForTwoNums = (a, b, cb) => {
    if (typeof a === 'number' && typeof b === 'number' && typeof cb === 'function') {
        cb(a + b)
        return
    }
    throw new Error('invalid types')
}

/**
 * returns an promise which is resolved by returning an object after a sec
 * 
 * @returns {object}
 */
const fetchDataSimulator = () => {
    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait)
            resolve({ title: "hello world" })
        }, 1000)
    })
}

/**
 * simulate data fetcing
 * 
 * @returns 
 */
const getData = async () => {
    return fetchDataSimulator().then(res => res)
}

module.exports = {
    sumTwoNumbers,
    addMultipleNumbers,
    removePrefix,
    StringValidator,
    doAddForTwoNums,
    getData
}