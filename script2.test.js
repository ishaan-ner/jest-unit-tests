const getNumbers = require("./script2");
const fetch = require("node-fetch");

it("calls numbers api to get 42", (done) => {
  expect.assertions(1);
  return getNumbers(fetch).then((data) => {
    expect(data).toContain("42");
    done();
  });
});
