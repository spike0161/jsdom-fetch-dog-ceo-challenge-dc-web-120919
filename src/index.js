let dogsImg
let dogBreed
document.addEventListener("DOMContentLoaded", () => {
  fetchDogsImg()
  fetchDogsBreeds()


})


function changeBreedColor(e){
  let clickedLi = e.target
  clickedLi.style.color = "red"
  // let breed = event.target
  // breed.style = "color: red"

}



function fetchDogsBreeds(){
  fetch("https://dog.ceo/api/breeds/list/all")
    .then( response => response.json())

    .then( data =>{

       renderBreed(Object.entries(data.message))
     })

}

function fetchDogsImg(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then( response => response.json())
    .then(data => data.message.forEach(dog => renderDog(dog)))
}




function renderBreed(breed){

  let breeds = document.getElementById('dog-breeds')
  breed.forEach(breed =>{
    let list = document.createElement('li')
    list.innerText = breed[0]
    list.addEventListener('click', changeBreedColor)

    breed[1].forEach(subBreed =>{
      let subBreedUl = document.createElement('ul')
      let subBreedList = document.createElement('li')
      subBreedList.innerText = subBreed
      subBreedList.addEventListener('click', changeBreedColor)

      list.appendChild(subBreedUl)
      subBreedUl.appendChild(subBreedList)
    })
    breeds.appendChild(list)
  })


}

function renderDog(dog) {
  let dogCard = document.getElementById("dog-image-container")
  let imageHolder = document.createElement('img')
  imageHolder.src = dog
  dogCard.appendChild(imageHolder)
}
