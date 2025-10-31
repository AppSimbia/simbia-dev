// SECTION WORKFLOW-03
let imgMockup = document.getElementById("img-mockup");
let btnStepOne = document.getElementById("step-one");
let btnStepTwo = document.getElementById("step-two");
let btnStepThree = document.getElementById("step-three");
let btnFlow = document.getElementsByClassName("btn-flow")

btnStepOne.addEventListener('click', changeMockupOne);
btnStepTwo.addEventListener('click', changeMockupTwo);
btnStepThree.addEventListener('click', changeMockupThree);

function changeMockupOne() {
    imgMockup.src = "images/mockups/mockup-login.svg";
}

function changeMockupTwo() {
    imgMockup.src = "images/mockups/mockup-home.svg";
}

function changeMockupThree() {
    imgMockup.src = "images/mockups/mockup-match.svg";
}
