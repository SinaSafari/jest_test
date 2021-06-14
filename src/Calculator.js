class Calculator {
  constructor() {}

  doOperation(operator, ...nums) {
    if (!nums.length) return 0;
    if (!this.checkOperator(operator)) throw new Error("invalid operator type");
    if (this.checkTypes(...nums)) {
      switch (operator) {
        case "+":
          return nums.reduce((acc, cur) => (acc += cur));
        case "-":
          return nums.reduce((acc, cur) => (acc -= cur));
        case "*":
          return nums.reduce((acc, cur) => (acc *= cur));
        case "/":
          return nums.reduce((acc, cur) => (acc /= cur));
        default:
          return nums.reduce((acc, cur) => (acc += cur));
      }
    }
    throw new Error("invalid types");
  }

  checkOperator(op) {
    if (op === "+" || op === "-" || op === "*" || op === "/") {
      return true;
    }
    return false;
  }

  checkTypes(...nums) {
    return new Set(nums.map((x) => typeof x)).size <= 1;
  }
}

module.exports = Calculator;
