const quotes= [
    "ccc",
    "mmm",
    "nnn"
];

const tipsbtn = document.getElementById("motivation-btn");
const motivation= document.getElementById("motivation");

tipsbtn.addEventListener("click", () => {

  const randomIndex = Math.floor(Math.random() * quotes.length);
  motivation.textContent = quotes[randomIndex];
});