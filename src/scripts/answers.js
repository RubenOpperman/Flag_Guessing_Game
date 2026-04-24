import { shuffle } from "./shuffleList.js";
export function generateFourAnswers(
  Country,
  allCountries,
  btn_container,
  btn_change_flag,
) {
  const countryList = [];
  const correctCountry = Country;
  const countriesList = allCountries;

  for (let i = 0; i < 3; i++) {
    countryList.push(
      countriesList[Math.floor(Math.random() * countriesList.length)],
    );
  }
  countryList.push(correctCountry);
  shuffle(countryList);

  countryList.map((country) => {
    const btn = document.createElement("button");
    btn.addEventListener("click", (e) => {
      const guess = correctCountry;
      btn_change_flag.classList.remove("hidden");

      if (guess == country) {
        console.log("correct");

        e.target.style.backgroundColor = "green";
      } else {
        console.log("wrong");
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
