import { fetchData } from "./api.js";

const img_container = document.getElementById("imageContainer");
const img = document.createElement("img");

img.src = "../images/ID_Photo_Clarissa_Opperman.jpg";
img.alt = "South Africa Flag";

img_container.appendChild(img);
console.log(fetchData());
