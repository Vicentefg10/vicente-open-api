# Open API Project – Random Pet Viewer

This website shows random **dog** and **cat** images using public APIs.

## APIs Used

- [Dog CEO API](https://dog.ceo/dog-api/)
- [Cat as a Service (CATAAS)](https://cataas.com/)

## How to Download and Run

1. **Download the files**  
   Clone or download this repository to your computer.

2. **Open the website**  
   Open the `index.html` file in your browser.

## How It Works

- Click the **Get Dog Image** button to see a random dog.
- Click the **Get Cat Image** button to see a random cat.

Every time you click a button, a new image loads.  
The dog images are fetched via API, while the cat images load directly from the CATAAS random image endpoint.

This works by using JavaScript and the `fetch()` function for dogs, and direct image URLs for cats.

If the image doesn’t load, check the browser console for any errors.

Enjoy the pet pictures!
