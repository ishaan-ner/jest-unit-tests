const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "ultimateguitar.com",
  "youtube.com",
  "catpictures.com",
  "guitarcentral.com",
];

const googleSearch = (searchInput, database) => {
  const matches = database.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch("guitar", googleDatabase));

module.exports = googleSearch;
