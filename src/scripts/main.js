import { fetchData } from "./api.js";
const data = await fetchData(
  "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags",
);

Math.random();

// fetching detailed country information
const officialNames = data.map((country) => country.name.official);
const imgSrc = data.map((countries) => countries.flags.png);
const imgAlt = data.map((countries) => countries.flags.alt);

const img_container = document.getElementById("imageContainer");
const img = document.createElement("img");

img.src = imgSrc[Math.floor(Math.random() * data.length)];
img.alt = imgAlt[Math.floor(Math.random() * data.length)];

img_container.appendChild(img);
