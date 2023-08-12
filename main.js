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

const filter = document.querySelector("#filterBtn")

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
  <a href="#" class="btn btn-primary" id="expelBtn">Expel</a>
  </div>
  </div>`;
    }
  renderToDom("#wizard-card", cards) 
  };

  const cardsOnDomExplled = () => {
    let cards = "";
  for (const student of students) {
    cards += `<div class="card" id="stuCard" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Death Eater</h5>
    <p class="card-text">${student.name}</p>
    <a href="#" class="btn btn-primary" id="expelBtn">Expel</a>
    </div>
    </div>`;
      }
    renderToDom("#expelledStudents", cards) 
    };


const form = document.querySelector(`#formId`)

const houseRandom = () => {
  const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
  return houses[Math.floor(Math.random() * 4)]; 
  }

const createStudent = (e) => {
  e.preventDefault();

  const newstudents = {
    id: students.length + 1,
    name: document.querySelector(`#name`).value,
    house: houseRandom()
  };

  students.push(newstudents);
  cardsOnDom(students);
  form.reset();
};
const events = () => {
  form.addEventListener('submit', createStudent);
  filter.addEventListener(`click`, (e) =>{
    if (e.target.id == "all") {
      cardsOnDom(students); 
    } else if (e.target.id == "Gryffindor") {
      cardsOnDom(students.filter(student => student.house === "Gryffindor"));
    }
  })
}


const startApp = () => {
  cardsOnDom(students);
  events();
}

startApp();
