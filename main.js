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

const btn = document.querySelector("#Submit")

const targeting = document.querySelector("#wizard-card")


const cardsOnDom = (students) => {
let domString = "";
  for (const student of students) {
      domString += `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${student.house}</h5>
        <p class="card-text">${student.name}</p>
        <a href="#" class="btn btn-primary">Expel</a>
      </div>
    </div>`;
    };
    targeting.innerHTML = domString;
  };
cardsOnDom;




btn.addEventListener('click', () => {

})    // listening for a click 
//cards need to be rendered (done) and a form to create the cards and be able to submit the form. by MONDAY.
