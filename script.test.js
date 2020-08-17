const googleSearch = require("./script");

const dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpictures.com"];

test("all possible string searches", () => {
  expect.assertions(2);
  expect(googleSearch("che", dbMock)).toEqual(["cheesepuff.com"]);
  expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
});

test("working with null and undefined", () => {
  expect(googleSearch(undefined, dbMock)).toEqual([]);
  expect(googleSearch(null, dbMock)).toEqual([]);
});

test("does not return more than 3 matches", () => {
  expect(googleSearch(".com", dbMock)).toHaveLength(3);
});
