const testExtra = require('../extraTest.cjs')

describe('test', () => {
    it("should return a value", () => {
        let result = testExtra.test(1, 'Dr. Oluyemi')

        expect(result).toEqual({id: 1, name: "Dr. Oluyemi"})
    })
})
