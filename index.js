// DOG section
const dogButton = document.getElementById("loadDog");
const dogImage = document.getElementById("dogImage");

// Funtion to load a random dog image from the Dog API
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

// Load dog image on button click and page load
dogButton.addEventListener("click", loadRandomDog);
loadRandomDog();

// CAT section
const catButton = document.getElementById("loadCat");
const catImage = document.getElementById("catImage");

// Function to load a random cat image from the Cat API
function loadRandomCat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      catImage.src = data[0].url;
      catImage.alt = "Random Cat";
    })
    .catch((err) => {
      console.error("Error fetching cat image:", err);
      catImage.alt = "Failed to load cat image";
    });
}

// Load cat image on button click and page load
catButton.addEventListener("click", loadRandomCat);
loadRandomCat();
