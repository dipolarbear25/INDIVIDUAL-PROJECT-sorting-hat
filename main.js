const students = [                     //object for examples of students in houses
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
  },
  {
    id: 2,
    name: "Luna Lovegood",
    house: "Ravenclaw",
  },{
    id: 3,
    name: "Tom Riddle",
    house: "Slytherin",
  },{
    id: 4,
    name: "Newt Scamander",
    house: "Hufflepuff",
  },
];

const expelledStudents = [];

const form = document.getElementById("formId")

const input = document.getElementById("input")



const targeting = document.querySelector("wizard-card");

document.write("fnameId")

form.addEventListener('Submit',(e) => {
  e.preventDefault();
});    //looking for btn press and stops page refresh

const randomHouse = students[Math.floor(Math.random() * students.house)]
console.log(randomHouse)


let cards = "";  //important
function cardsOnDom(){
for (let student of students) {
  cards += `<div class="card" id="stuCard" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${student.house}</h5>
  <p class="card-text">${student.name}</p>
  <a href="#" class="btn btn-primary" id="expelbtn">Expel</a>
  </div>
  </div>`;
    }};
cardsOnDom();
targeting.innerHTML = cards; 


 


//cards need to be rendered and a form to create the cards and be able to submit the form. by MONDAY.
