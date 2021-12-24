import testMe from "./app";

describe("testMe", () => {
  test("should return true", () => {
    expect(testMe()).toBe(true);
  });
});
