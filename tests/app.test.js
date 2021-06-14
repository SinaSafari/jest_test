const {
  removePrefix,
  sumTwoNumbers,
  apiSimolator,
  doAddForTwoNums,
  getData,
} = require("../src/app");
const Calculator = require("../src/Calculator");

const INVALID_TYPES_ERR_MSG = "invalid types";

describe("app.js tests", () => {
  describe("add two number", () => {
    it("should add two numbers correctly", () => {
      const res = sumTwoNumbers(2, 3);
      expect(res).toBe(5);
    });

    it("should throw error if the types are invalid", () => {
      expect(() => sumTwoNumbers("2", 3)).toThrow(INVALID_TYPES_ERR_MSG);
    });
  });

  describe("calculator test", () => {
    const calc = new Calculator();

    test("invalid operator", () => {
      expect(() => calc.doOperation("=", 1, 2)).toThrow(
        "invalid operator type"
      );
    });

    test("invalid types as numbers", () => {
      expect(() => calc.doOperation("*", "1", 2)).toThrowError(
        INVALID_TYPES_ERR_MSG
      );
    });

    test("add functionality", () => {
      expect(calc.doOperation("+", 1, 2, 3, 4)).toEqual(10);
    });

    test("subtraction functionality", () => {
      expect(calc.doOperation("-", 4, 2)).toEqual(2);
    });

    test("multiplication functionality", () => {
      expect(calc.doOperation("*", 4, 2)).toEqual(8);
    });

    test("division functionality", () => {
      expect(calc.doOperation("/", 4, 2)).toEqual(2);
    });

    test("summation in numbers with floating point", () => {
      expect(calc.doOperation("+", 0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe("removing prefix functionality", () => {
    const sampleData1 = "pr-123";
    const sampleData2 = "eg-abc";
    const invalidSampleData = "abs-pr";

    it("should throw error for invalid types", () => {
      expect(() => removePrefix(123)).toThrow(INVALID_TYPES_ERR_MSG);
    });

    it("should throw error for invalid pattern", () => {
      expect(() => removePrefix("pr-", invalidSampleData)).toThrow(
        "invalid pattern"
      );
    });

    it('should delete "pr-" prefix  in "pr-123"', () => {
      const res = removePrefix("pr-", sampleData1);
      expect(typeof res).toBe("string");
      expect(res).not.toMatch("pr-");
    });

    it('should delete "pr-" prefix  in "pr-abc"', () => {
      const res = removePrefix("eg-", sampleData2);
      expect(res).toBeTruthy();
      expect(res).not.toMatch(/pr-/);
    });
  });

  describe("api simulator functionality", () => {
    const validData = "this is a valid data";
    const invalidData = 123;

    it("should throw error for invalid data", () => {
      expect(() => apiSimolator(invalidData)).toThrow(INVALID_TYPES_ERR_MSG);
    });

    it("should be valid string", () => {
      const res = apiSimolator(validData);
      expect(res).toHaveProperty("success");
      expect(res).toHaveProperty("message");
      expect(res).toHaveProperty("user");
      expect(res).toHaveProperty("posts");
      expect(res).not.toHaveProperty("apple");
    });

    it("should match sample response", () => {
      const sampleRes = {
        success: expect.any(Boolean),
        message: expect.any(String),
        user: expect.any(Object),
        posts: expect.any(Array),
      };
      const res = apiSimolator(validData);
      expect(res).toMatchObject(sampleRes);
    });
  });

  describe("callback functionality", () => {
    it("callback functionality for adding, expecting output", () => {
      const mockCallback = jest.fn();
      doAddForTwoNums(1, 2, mockCallback);
      expect(mockCallback).toHaveBeenCalled();
      expect(mockCallback).toHaveBeenCalledTimes(1);
      expect(mockCallback).toHaveBeenCalledWith(3);
    });

    it("should throw error for invalid types", () => {
      const mockCallback = jest.fn();
      expect(() => doAddForTwoNums("1", 2, mockCallback)).toThrow(
        INVALID_TYPES_ERR_MSG
      );
    });
  });

  describe("promises functionality", () => {
    it("should fetch data async", () => {
      return getData().then((res) => {
        expect(typeof res).toBe("object");
        expect(res).toHaveProperty("title");
        expect(res.title).toEqual("hello world");
      });
    });
  });
});
