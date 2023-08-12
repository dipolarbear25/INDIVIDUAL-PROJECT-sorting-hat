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

const expelledStudents = [];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const filter = document.querySelector('#filterBtn')

const cardsOnDom = (array) => {
  let cards = "";
for (const student of array) {
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

  const cardsOnDomExplled = (array) => {
    let cards = "";
  for (const expelled of array) {
    cards += `<div class="card" id="stuCard" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Death Eater</h5>
    <p class="card-text">${expelled.name}</p>
    <a href="#" class="btn btn-primary" id="expelBtn">Expel</a>
    </div>
    </div>`;
      }
    renderToDom("#expelledStudents", cards) 
    };

const expel = document.querySelector('#expelBtn')
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
};


const events = () => {
  form.addEventListener('submit', createStudent);
  filter.addEventListener('click', (e) =>{
    if (e.target.id == "all") {
      cardsOnDom(students); 
    } else if (e.target.id == "gry") {
      cardsOnDom(students.filter(student => student.house === "Gryffindor"));
    } else if (e.target.id == "rav") {
      cardsOnDom(students.filter(student => student.house === "Ravenclaw"));
    } else if (e.target.id == "sly") {
      cardsOnDom(students.filter(student => student.house === "Slytherin"));
    } else if (e.target.id == "huf") {
      cardsOnDom(students.filter(student => student.house === "Hufflepuff"));
    }
  })
};

expel.addEventListener('click', (e) => {
  
})

const startApp = () => {
  cardsOnDom(students);
  cardsOnDomExplled(expelledStudents);
  events();
}

startApp();
