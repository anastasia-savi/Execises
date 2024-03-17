const findMiddleNumber = require("./middleNumber");

test("find middle number", () => {
  expect(findMiddleNumber([150, 3, 50])).toBe(50);
});

test("find middle number", () => {
  expect(findMiddleNumber([12, 74, 90, 5, 163, 87])).toBe(87);
});

test("find middle number", () => {
  expect(findMiddleNumber([])).toBe(undefined);
});

test("find middle number", () => {
  expect(findMiddleNumber([12, 74])).toBe(12);
});

test("find middle number", () => {
  expect(findMiddleNumber([187])).toBe(187);
});
