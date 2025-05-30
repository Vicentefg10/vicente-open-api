const button = document.getElementById("loadDog");
const dogImage = document.getElementById("dogImage");

function loadRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dogImage.src = data.message;
    })
    .catch((err) => {
      console.error("Error fetching dog image:", err);
      dogImage.alt = "Failed to load dog image";
    });
}

/* Load a dog automatically on page load */
loadRandomDog();

/*And again when clicking the button */
button.addEventListener("click", loadRandomDog);
