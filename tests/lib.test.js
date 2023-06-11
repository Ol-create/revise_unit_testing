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

describe("getProduct", () => {
    it("should return the object id", () => {
        const result = lib.getProduct(1);

        expect(result).toMatchObject({ id: 1, price: 10 })
    })
});

describe("registerUser", () => {
    it("should throw expection user is undefined", () => {
        const arg = [null, undefined, NaN, 0, '', false];

        arg.forEach( a => {
            expect(() => {
              lib.registerUser(a);
            }).toThrow();
        }) 
    })

    it("should return user obj if username is defined", () => {
      const result = lib.registerUser("Dr. Oluyemi");

        expect(result).toMatchObject({ username: 'Dr. Oluyemi' });
        expect(result.id).toBeGreaterThan(0)
    });
});