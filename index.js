const fetch = require("isomorphic-fetch");
require("dotenv").config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY);

async function getImage(query) {
  try {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}s&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    const response = await fetch(endpoint);

    const data = await response.json();

    const imageUrl = data.data[0].images.original.url

    const randomIndex = Math.floor(Math.random() * data.data.length)
    const randomImage = data.data[randomIndex];
    const randomGifUrl = randomImage.images.original.url
    console.log(randomGifUrl)
    return randomGifUrl;
  } catch (err) {
    console.error(err);
  }
}

getImage('rick and morty')
