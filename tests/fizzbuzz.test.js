const exercise1 = require("../exercise1");

describe("fizzBuzz", () => {
  it("should throw error if input is not a number", () => {
    expect(() => {
      exercise1.fizzBuzz('9');
    }).toThrow();
  });

  it("should throw error if input is not a number", () => {
    const result = exercise1.fizzBuzz(30);
    expect(result).toBe("FizzBuzz");
  });

  it("should return FizzBuzz if number is divisible by 3 and 5", () => {
    const result = exercise1.fizzBuzz(30);
    expect(result).toBe("FizzBuzz");
  });
    
    it("should return Fizz if number is divisible by 3 and not by 5", () => {
      const result = exercise1.fizzBuzz(9);
      expect(result).toBe("Fizz");
    });

    it("should return Fizz if number is divisible by 5 and not by 3", () => {
      const result = exercise1.fizzBuzz(50);
      expect(result).toBe("Buzz");
    });

    it("should return inputed number if number is not divisible by 5 and 3", () => {
      const result = exercise1.fizzBuzz(34);
      expect(result).toBe(34);
    });
});
