// DOG
const dogButton = document.getElementById("loadDog");
const dogImage = document.getElementById("dogImage");

function loadRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      dogImage.src = data.message;
      dogImage.alt = "Random Dog";
    })
    .catch((err) => {
      console.error("Error fetching dog image:", err);
      dogImage.alt = "Failed to load dog image";
    });
}

dogButton.addEventListener("click", loadRandomDog);
loadRandomDog(); // load on page load

// CAT (simplified - no JSON fetch)
const catButton = document.getElementById("loadCat");
const catImage = document.getElementById("catImage");

function loadRandomCat() {
  // Add timestamp to bust cache and get a fresh random cat each time
  catImage.src = `https://cataas.com/cat?timestamp=${new Date().getTime()}`;
  catImage.alt = "Random Cat";
}

catButton.addEventListener("click", loadRandomCat);
loadRandomCat(); // load on page load
