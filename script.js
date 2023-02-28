// let mikoArr = ["Curious", "Stubborn", "Skittish"];
// let lunaArr = ["Cuddly", "Vocal", "Chill"];

// let aboutMiko = document.getElementById("about-miko");
// let aboutLuna = document.getElementById("about-luna");

// function aboutM() {
//   for (let i = 0; i < mikoArr.length; i++) {
//     aboutMiko.innerHTML += "<li>" + mikoArr[i] + "</li>";
//   }
// }

// function aboutL() {
//   for (let i = 0; i < lunaArr.length; i++) {
//     aboutLuna.innerHTML += "<li>" + lunaArr[i] + "</li>";
//   }
// }
const modalMiko = document.querySelector(".modal");
const modalLuna = document.querySelector(".modaltwo");
const closeMiko = document.querySelector(".close-modal");
const closeLuna = document.querySelector(".close-modaltwo");
const showMiko = document.querySelector(".show-modalM");
const showLuna = document.querySelector(".show-modalL");
const overlay = document.querySelector(".overlay");

const openModalM = function () {
  modalMiko.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openModalL = function () {
  modalLuna.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeLunaModal = function () {
  modalLuna.classList.add("hidden");
  overlay.classList.add("hidden");
};

const closeMikoModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

showMiko.addEventListener("click", openModalM);
showLuna.addEventListener("click", openModalL);

closeLuna.addEventListener("click", closeLunaModal);
closeMiko.addEventListener("click", closeMikoModal);
