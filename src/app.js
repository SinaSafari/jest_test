/**
 * this functions tries to returns summation of these two numbers
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const sumTwoNumbers = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
  throw new Error("invalid types");
};

/**
 * remove prefix provided from sentence
 *
 * @param {string} prefix
 * @param {string} sentence
 * @returns {string}
 */
const removePrefix = (prefix, sentence) => {
  if (typeof sentence === "string" && typeof sentence === "string") {
    if (sentence.startsWith(prefix)) {
      return sentence.replace(prefix, "");
    }
    throw new Error("invalid pattern");
  }
  throw new Error("invalid types");
};

/**
 * validate that the data to be string and return an object
 *
 * @param {string} data
 * @returns
 */
const apiSimolator = (msg) => {
  if (typeof msg === "string") {
    return {
      success: true,
      message: msg,
      user: {},
      posts: [],
    };
  }
  throw new Error("invalid types");
};

/**
 * call cb after validating data types
 *
 * @param {number} a
 * @param {number} b
 * @param {function} cb
 * @returns
 */
const doAddForTwoNums = (a, b, cb) => {
  if (
    typeof a === "number" &&
    typeof b === "number" &&
    typeof cb === "function"
  ) {
    cb(a + b);
    return;
  }
  throw new Error("invalid types");
};

/**
 * returns an promise which is resolved by returning an object after a sec
 *
 * @returns {object}
 */
const fetchDataSimulator = () => {
  return new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve({ title: "hello world" });
    }, 1000);
  });
};

/**
 * simulate data fetcing
 *
 * @returns
 */
const getData = async () => {
  return fetchDataSimulator().then((res) => res);
};

module.exports = {
  sumTwoNumbers,
  removePrefix,
  apiSimolator,
  doAddForTwoNums,
  getData,
};
