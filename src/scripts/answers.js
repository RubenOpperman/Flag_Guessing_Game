import { shuffle } from "./shuffleList.js";
export function generateFourAnswers(
  Country,
  allCountries,
  btn_container,
  btn_change_flag,
  updateScore,
) {
  const countryList = [];

  const correctCountry = Country;
  const countriesList = allCountries;

  countryList.push(correctCountry);
  for (let i = 0; i < 3; i++) {}

  while (countryList.length < 4) {
    const countryAdd =
      countriesList[Math.floor(Math.random() * countriesList.length)];

    if (!countryList.includes(countryAdd)) {
      countryList.push(countryAdd);
    }
  }

  shuffle(countryList);

  countryList.map((country) => {
    const btn = document.createElement("button");

    btn.addEventListener("click", (e) => {
      const guess = e.target.textContent;

      btn_change_flag.classList.remove("hidden");

      if (guess == correctCountry.name.common) {
        console.log("correct");
        updateScore(1);

        e.target.style.backgroundColor = "green";
      }
      if (guess != correctCountry.name.common) {
        console.log("wrong");
        updateScore(0);

        e.target.style.backgroundColor = "red";
      }
    });

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
    btn.id = "button";
    btn_container.appendChild(btn);

    const allButtons = btn_container.querySelectorAll("button");
    allButtons.forEach((button) => {
      button.addEventListener("click", () => {
        allButtons.forEach((btn) => {
          if (btn.innerText == correctCountry.name.common) {
            btn.style.backgroundColor = "green";
          }
          btn.disabled = true;
        });
      });
    });
  });
}
