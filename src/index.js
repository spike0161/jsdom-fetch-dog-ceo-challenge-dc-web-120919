let dogsImg

document.addEventListener("DOMContentLoaded", () => {

    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then( response => response.json())
      .then(data => data.message.forEach(dog => renderDog(dog)))

    })








function renderDog(dog) {
  let dogCard = document.getElementById("dog-image-container")
  let imageHolder = document.createElement('img')
  imageHolder.src = dog
  dogCard.appendChild(imageHolder)
}
