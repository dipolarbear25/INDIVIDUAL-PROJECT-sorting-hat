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
// const objProperty = Math.floor(Math.random() * students.house)

// console.log(objProperty);

const userstudent = [{}]

const expelledStudents = [];

const form = document.querySelector(`#form`)

const targeting = document.querySelector(`#wizard-card`);

let card = document.querySelector(`#submit`)

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

const createStudent = (e) => {
  e.preventDefault();

  const newstudents = {
    id: students.length + 1,
    name: document.querySelector(`#name`),
    house:  Math.floor(Math.random() * students.house)
  };
  students.push(newstudents)
  cardsOnDom(students)
};

form.addEventListener('submit', createStudent)
