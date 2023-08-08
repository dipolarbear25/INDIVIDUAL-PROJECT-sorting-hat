const students = [                    
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

const newstudents =[
  {
    
  }]

const expelledStudents = [];

const user = document.getElementById(`name`)         //need to assign name.value to a variable.

const username = user.value

const btn = document.getElementById(`number`)

const targeting = document.getElementById(`wizard-card`);

btn.addEventListener('submit',(e) => {
  e.preventDefault();
  newstudents.push(username)
  //get the btn to take the value and push it into newstudents
});    

let card = document.getElementById(`submit`)

let cards = "";

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
  targeting.innerHTML = cards
    }};
cardsOnDom();
