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



const renderToDom = ("wizard-card", htmlToRender) => {
  const selectedDiv = document.querySelector("#wizard-card");
  selectedDiv.innerHTML = htmlToRender;
};

let domString = ""

for (const student of students) {
      domString += `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
    };
const startApp = () => {
  studentsCard();
}
startApp();


//cards need to be rendered and a form to create the cards and be able to submit the form. by MONDAY.
