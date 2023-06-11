const lib = require('../lib')

test("absolute - if the number is positive the return should be positive", () => {
    let result = lib.absolute(1)
    expect(result).toBe(1)
})

test("absolute - if the number is negative the return should be positive", () => {
  let result = lib.absolute(-1);
  expect(result).toBe(1);
});

test("absolute - if the number is zore the return should be zero", () => {
  let result = lib.absolute(0);
  expect(result).toBe(0);
});