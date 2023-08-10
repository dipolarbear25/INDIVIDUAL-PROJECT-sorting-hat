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
//this takes the inner html of #wizard-card(empty) and renders the html the variable "cards" has 
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


const userstudent = [{}]

const expelledStudents = [];

const cardsOnDom = () => {
  let cards = "";
for (const student of students) {
  cards += `<div class="card" id="stuCard" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${student.house}</h5>
  <p class="card-text">${student.name}</p>
  <a href="#" class="btn btn-primary" id="expelbtn">Expel</a>
  </div>
  </div>`;
    }
  renderToDom("#wizard-card", cards) //see line 21
  };

const form = document.querySelector(`#formId`)


const objProperty = Math.floor(Math.random() * students.house)
//this code is an issue^
console.log(objProperty);

const createStudent = (e) => {
  e.preventDefault();

  const newstudents = {
    id: students.length + 1,
    name: document.querySelector(`#name`).value,
    house: Math.floor(Math.random()) //<- and this one
  };
  students.push(newstudents);
  cardsOnDom(students);
  form.reset();
};

form.addEventListener('submit', createStudent);

const startApp = () => {
  cardsOnDom(students);
}

startApp();


//ITS FINALLY PRINTS!!!!!!
//now i just need to get the house name to print, im getting NaN.
