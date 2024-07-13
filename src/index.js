console.log('%c HI', 'color: firebrick')
function fetchImages () {
    const apiURL = "https://dog.ceo/api/breeds/image/random/4";

    fetch(apiURL)
       .then(response => response.json())
       .then(data => {
         const iamageCointainer = document.getElementById("image-container");
         data.message.forEach(imageUrl =>  {
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            imageContainer.appendChild(imgElement);
         })          
         });
         .catch(error =>  console.error("Error fetching images :",error));
       })
}