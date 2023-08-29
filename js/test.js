
console.log("test.js loaded");
var pootis = document.getElementById("pootis");
var count = 0;
function playSound() {
  pootis.play();
  console.log("sound played")
}
function increment() {
var debug = count;
count = count + 1;
if (count > debug) {
    console.log("counter incremented")
} else {
    console.log("counter not incremented")
}

document.getElementById("pootisCount").innerHTML = count;
}