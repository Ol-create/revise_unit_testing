const lib = require('../lib')

describe('absolute', () => {
    it("absolute - if the number is positive the return should be positive", () => {
      let result = lib.absolute(1);
      expect(result).toBe(1);
    });

    it("absolute - if the number is negative the return should be positive", () => {
      let result = lib.absolute(-1);
      expect(result).toBe(1);
    });

    it("absolute - if the number is zore the return should be zero", () => {
      let result = lib.absolute(0);
      expect(result).toBe(0);
    });
})

describe('greet', () => {
    it('should return greeting message', () => {
        let result = lib.greet('Oluyemi');
        
        expect(result).toContain('Oluyemi')
    })
})

describe("getCurrencies", () => {
  it("should contain a given or list of currency", () => {
    const result = lib.getCurrencies();

    expect(result).toEqual(expect.arrayContaining(["AUD"]));
  });
});