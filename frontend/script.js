const urlAPI = "http://localhost:3000"

// Bouton tous les PCs
const btnAll = document.querySelector(".btnAll")
btnAll.addEventListener('click', getAllPcs)

function getAllPcs() {
  fetch(urlAPI + "/pcs")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur : ', error))
}

// Bouton PC n°1
const btnOne = document.querySelector(".btnOne")
btnOne.addEventListener('click', getPc1)

function getPc1() {
  fetch(urlAPI + "/pcs/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur : ', error))
}