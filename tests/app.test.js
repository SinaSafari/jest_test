const {
    addMultipleNumbers,
    removePrefix,
    sumTwoNumbers,
    StringValidator,
    doAddForTwoNums,
    getData,
    sorter,
    checkEmailPassword,
} = require('../src/app')
const Calculator = require('../src/Calculator')

const INVALID_TYPES_ERR_MSG = 'invalid types'

describe('app.js tests', () => {

    describe('add two number', () => {
        it('should add two numbers correctly', () => {
            const res = sumTwoNumbers(2, 3)
            expect(res).toBe(5);
        })

        it('should throw error if the types are invalid', () => {
            expect(() => sumTwoNumbers("2", 3)).toThrow(INVALID_TYPES_ERR_MSG)
        })
    })

    describe('add multiple number functionality', () => {

        it('should throw invalid type', () => {
            expect(() => addMultipleNumbers("1", 2, 3)).toThrow(INVALID_TYPES_ERR_MSG)
        })

        it('should return undefiend with empty array', () => {
            const res = addMultipleNumbers()
            expect(res).toBe(0)
        })

        it('1, 2 ,3 to be 6', () => {
            const sampleData = [1, 2, 3] // 6
            const res = addMultipleNumbers(...sampleData)
            expect(res).toBeTruthy()
            expect(res).toBe(6)
        })

        it('1, 2, 3, 4, 5 to be 15', () => {
            const sampleData = [1, 2, 3, 4, 5] // 15
            const res = addMultipleNumbers(...sampleData)
            expect(res).not.toBeUndefined()
            expect(typeof res).toBe('number')
            expect(res).toEqual(15)
        })

    })
    describe('calculator test', () => {
        const calc = new Calculator()

        test('invalid operator', () => {
            expect(() => calc.doOperation("=", 1, 2)).toThrow('invalid operator type')
        })

        test('invalid types as numbers', () => {
            expect(() => calc.doOperation("*", "1", 2)).toThrowError(INVALID_TYPES_ERR_MSG)
        })

        test('add functionality', () => {
            expect(calc.doOperation("+", 1, 2)).toEqual(3)
        })

        test('subtraction functionality', () => {
            expect(calc.doOperation("-", 4, 2)).toEqual(2)
        })

        test('multiplication functionality', () => {
            expect(calc.doOperation("*", 4, 2)).toEqual(8)
        })

        test('division functionality', () => {
            expect(calc.doOperation("/", 4, 2)).toEqual(2)
        })
    })
    describe('removing prefix functionality', () => {
        const sampleData1 = "pr-123";
        const sampleData2 = "pr-abc"
        const invalidSampleData = "abs-pr"

        it('should delete "pr-" prefix  in "pr-123"', () => {
            const res = removePrefix("pr-", sampleData1)
            expect(typeof res).toBe('string')
            expect(res).not.toMatch("pr-")
        })

        it('should delete "pr-" prefix  in "pr-abc"', () => {
            const res = removePrefix("pr-", sampleData2)
            expect(res).toBeTruthy()
            expect(res).not.toMatch(/pr-/)
        })

        it('should throw error for invalid pattern', () => {
            expect(() => removePrefix("pr-", invalidSampleData)).toThrow("invalid pattern")
        })

        it('should throw error for invalid types', () => {
            expect(() => removePrefix(123)).toThrow(INVALID_TYPES_ERR_MSG)
        })
    })

    describe('string validator functionality', () => {
        const validData = "this is a valid data"
        const invalidData = 123
        const sampleRes = {
            success: expect.any(Boolean),
            message: expect.any(String),
        }

        it('should throw error for invalid data', () => {
            expect(() => StringValidator(invalidData)).toThrow(INVALID_TYPES_ERR_MSG)
        })

        it('should be valid string', () => {
            const res = StringValidator(validData)
            expect(res).toHaveProperty('success')
            expect(res).toHaveProperty('message')
            expect(res).not.toHaveProperty('apple')
        })

        it('should match sample response', () => {
            const res = StringValidator(validData)
            expect(res).toMatchObject(sampleRes)
        })
    })

    describe('callback functionality', () => {

        it('callback functionality for adding, expecting output', () => {
            const mockCallback = jest.fn()
            doAddForTwoNums(1, 2, mockCallback)
            expect(mockCallback).toHaveBeenCalled()
            expect(mockCallback).toHaveBeenCalledTimes(1)
            expect(mockCallback).toHaveBeenCalledWith(3)
        })

        it('should throw error for invalid types', () => {
            const mockCallback = jest.fn()
            expect(() => doAddForTwoNums("1", 2, mockCallback)).toThrow(INVALID_TYPES_ERR_MSG)
        })
    })

    describe('promises functionality', () => {
        it('should fetch data async', () => {
            return getData().then(res => {
                expect(typeof res).toBe('object')
                expect(res).toHaveProperty('title')
                expect(res.title).toEqual('hello world')
            })
        })
    })

    describe('sorter functionlaity', () => {
        it('should be sorted', () => {
            const sampleData = [2, 100, 0]
            const res = sorter(sampleData)
            expect(res).toEqual([0, 2, 100])
        })

        it('should throw error with string as input', () => {
            const sampleData = ["1", "a", true]
            expect(() => sorter(sampleData)).toThrow(INVALID_TYPES_ERR_MSG)
        })
    })


    describe('email and password check', () => {
        it('should return an object containing email and password', () => {
            const data = { email: "hello@hi.com", password: "123456" }
            const res = checkEmailPassword(data.email, data.password)
            expect(res).toEqual(
                expect.objectContaining({
                    email: data.email,
                    password: expect.any(String)
                })
            )
        })

        it('should throw error for invalid email', () => {
            const data = { email: "hi.com", password: "123456" }
            expect(() => checkEmailPassword(data.email, data.password)).toThrow('invalid email')
        })

        it('should throw error for invalid password', () => {
            const data = { email: "test@test.com", password: "hello!" }
            expect(() => checkEmailPassword(data.email, data.password)).toThrow('invalid password')
        })
    })

})


