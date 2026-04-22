import { fetchData } from "./api.js";
//fetch data from api
const data = await fetchData(
  "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags",
);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j using destructuring
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const btn_container = document.getElementById("buttonContainer");
function generateFourAnswers(correctCountry, allCountries) {
  const countryList = [];
  const country = correctCountry;
  const countriesList = allCountries;

  for (let i = 0; i < 3; i++) {
    countryList.push(Countries[Math.floor(Math.random() * data.length)]);
  }
  countryList.push(country);
  shuffle(countryList);

  countryList.map((country) => {
    const btn = document.createElement("button");
    btn.textContent = country.name.common;
    btn.classList.add(
      "px-2",
      "py-1",
      "border-1",
      "rounded-sm",
      "flex",
      "w-50",
      "justify-center",
      "mb-5",
    );
    btn_container.appendChild(btn);
  });
}

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

  img.src = CountryImgSrc;
  generateFourAnswers(Country, Countries);
});

// create img container and load img
const img_container = document.getElementById("imageContainer");
const img = document.createElement("img");
img.src = CountryImgSrc;
img.alt = CountryImgAlt;

img_container.appendChild(img);
generateFourAnswers(Country, Countries);
