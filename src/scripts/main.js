import { fetchData } from "./api.js";
import { generateFourAnswers } from "./answers.js";
//fetch data from api
const data = await fetchData(
  "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags",
);

const score = 0;

const btn_container = document.getElementById("buttonContainer");

//create button that changes flag
const btn_change_flag = document.getElementById("btn_change_flag");

// fetching detailed country information
const Countries = data.map((country) => country);
const Country = Countries[Math.floor(Math.random() * data.length)];

const CountryName = Country.name.common;
const CountryImgSrc = Country.flags.png;
const CountryImgAlt = Country.flags.alt;

//button flag change logic
btn_change_flag.addEventListener("click", () => {
  btn_container.innerHTML = "";

  const Country = Countries[Math.floor(Math.random() * data.length)];

  const CountryName = Country.name.common;
  const CountryImgSrc = Country.flags.png;
  const CountryImgAlt = Country.flags.alt;
  btn_change_flag.classList.add("hidden");
  img.src = CountryImgSrc;

  generateFourAnswers(Country, Countries, btn_container, btn_change_flag);
});

// create img container and load img
const img_container = document.getElementById("imageContainer");
const img = document.createElement("img");
img.src = CountryImgSrc;
img.alt = CountryImgAlt;

img_container.appendChild(img);

generateFourAnswers(Country, Countries, btn_container, btn_change_flag);
