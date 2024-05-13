const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

let count = 0;

window.onload = () => {
  counter.textContent = count;
};

incrementBtn.onclick = () => {
  count++;
  counter.textContent = count;
};

decrementBtn.onclick = () => {
  count--;
  counter.textContent = count;
};

console.log("Hello from Electron!");
