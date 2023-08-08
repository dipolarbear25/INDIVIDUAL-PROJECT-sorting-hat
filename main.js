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

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


const userstudent = [{}]

const expelledStudents = [];

const cardsOnDom = (array) => {
  let cards = "";
for (const student of array) {
  cards += `<div class="card" id="stuCard" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${student.house}</h5>
  <p class="card-text">${student.name}</p>
  <a href="#" class="btn btn-primary" id="expelbtn">Expel</a>
  </div>
  </div>`;
    }
  renderToDom("#wizard-card", cards)
  };

const form = document.querySelector(`#form`)

  
// const objProperty = Math.floor(Math.random() * students.house)
const createStudent = (e) => {
  e.preventDefault();

  const newstudents = {
    id: students.length + 1,
    name: document.querySelector(`#name`).value,
    house: Math.floor(Math.random() * students.house)
  };
  students.push(newstudents);
  cardsOnDom(students);
  form.reset();
};

form.addEventListener('submit', createStudent);


console.log(`hello`);
