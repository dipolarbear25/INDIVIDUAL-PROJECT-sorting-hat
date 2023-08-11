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

const cardsOnDom = () => {
  let cards = "";
for (const student of students) {
  cards += `<div class="card mb-3" style="max-width: 500px;">
  <div class="row g-0">
    <div class="col-md-4"style="max-width:150px;background-color:${student.house == "Ravenclaw" ? "#0b304a" : student.house == "Slytherin" ? "#25581f" : student.house == "Gryffindor" ? "#4d0506" : "#f3de0b"};">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">${student.house}</p>
        <p class="card-text"><small class="text-body-secondary"><button type="button" class="btn btn-outline-danger" id='expel--${student.studentId}'>Expel</button></small></p>
      </div>
    </div>
  </div>
  </div>`
    }
  renderToDom("#wizard-card", cards) 
  };

const form = document.querySelector(`#formId`)

const stuProp = Object.keys(students);

const randomPropNum = Math.floor(Math.random() * stuProp.length)

const randomPropName = stuProp[randomPropNum]

const randomPropValue = students[randomPropName]

const randomValue = Math.floor(Math.random() * randomPropValue.length)

console.log(randomPropValue[randomValue]);

const createStudent = (e) => {
  e.preventDefault();

  const newstudents = {
    id: students.length + 1,
    name: document.querySelector(`#name`).value,
    house: Math.random(students.house)
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
