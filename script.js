let mikoArr = ["Curious", "Stubborn", "Skittish"];
let lunaArr = ["Cuddly", "Vocal", "Chill"]

let aboutMiko = document.getElementById("about-miko");
let aboutLuna = document.getElementById("about-luna");

function aboutM() {
    for (let i = 0; i < mikoArr.length, i++) {
        aboutMiko.innerHTML += mikoArr[i];
    }
}
