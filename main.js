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
  },
  {
    id: 3,
    name: "Tom Riddle",
    house: "Slytherin",
  },
  {
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
  <p class="card-text"><small class="text-body-secondary"><button type="button" class="btn btn-outline-danger" id="expelBtn--${student.id}">Expel</button></small></p>
  </div>
  </div>`;
    }
  renderToDom("#wizard-card", cards) 
  };

  const cardsOnDomExpelled = (array) => {
    let cards = "";
  for (const expelled of array) {
    cards += `<div class="card" id="stuCard" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Death Eater</h5>
    <p class="card-text">${expelled.name}</p>
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
};


const filterBtn = () => {
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

const expel = document.querySelector("#wizard-card")

expel.addEventListener('click', (e) => {
  if (e.target.id.includes('expelBtn')) {

    const [, stuId] = e.target.id.split("--");
  
    const studentIndex = students.findIndex((student) => 
      student.id === Number(stuId));
    
    let voldy = students.splice(studentIndex, 1)[0];
     
    expelledStudents.push(voldy)
    
    cardsOnDom(students)

    cardsOnDomExpelled(expelledStudents);
  };
});



const startApp = () => {
  cardsOnDom(students);
  cardsOnDomExpelled(expelledStudents);
  filterBtn();
}

startApp();
