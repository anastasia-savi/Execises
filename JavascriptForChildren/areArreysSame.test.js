const areArreysSame = require("./areArreysSame");

test("areArreysSame", () => {
  expect(areArreysSame([1, 2, 3], [1, 2, 3])).toBe(true);
});
test("areArreysSame", () => {
  expect(areArreysSame([1, 2, 3], [1, 2])).toBe(false);
});
test("areArreysSame", () => {
  expect(areArreysSame([1, 6, 3, 5], [1, 2, 3])).toBe(false);
});
