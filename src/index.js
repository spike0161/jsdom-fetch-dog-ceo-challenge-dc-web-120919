let dogsImg
let dogBreed
document.addEventListener("DOMContentLoaded", () => {
  fetchDogsImg()
  fetchDogsBreeds()



})


    function renderBreed(breed){
      let breeds = document.getElementById('dog-breeds')
      debugger
      breed.forEach(breed =>{
        let list = document.createElement('li')
        list.innerText = breed
        breeds.appendChild(list)
      })
}

function fetchDogsSubBreeds(){
  fetch("https://dog.ceo/api/breeds/list/all")
    .then( response => response.json())
    .then( data =>  renderBreed(Object.values(data)))

}




function fetchDogsBreeds(){
  fetch("https://dog.ceo/api/breeds/list/all")
    .then( response => response.json())
    .then( data =>  renderBreed(Object.keys(data.message)))

}

function fetchDogsImg(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then( response => response.json())
    .then(data => data.message.forEach(dog => renderDog(dog)))
}





function renderDog(dog) {
  let dogCard = document.getElementById("dog-image-container")
  let imageHolder = document.createElement('img')
  imageHolder.src = dog
  dogCard.appendChild(imageHolder)
}
