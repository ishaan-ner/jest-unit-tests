const fetch = require("node-fetch");

const getNumbers = async (fetch) => {
  const response = await fetch("http://numbersapi.com/42?json");
  const data = await response.json();
  //   console.log(data.text);
  return data.text;
};

getNumbers(fetch);

module.exports = getNumbers;
