const quotes= [
    "✨“Smile in the mirror. Do that every morning and you’ll start to see a big difference in your life.” —Yoko Ono✨",
    "✨“Don’t count the days. Make the days count.” —Muhammad Ali✨",
    "✨“Every morning, I wake up saying, 'I’m still alive, a miracle.' And so I keep on pushing.” —Jim Carrey✨",
    "✨“In the morning, instead of saying to yourself, I got to wake up say I get to wake up!” —Erykah Badu✨",
    "✨“Some people dream of success, while other people get up every morning and make it happen.” —Wayne Huizenga✨"
];

const tipsbtn = document.getElementById("motivation-btn");
const motivation= document.getElementById("motivation");

tipsbtn.addEventListener("click", () => {

  const randomIndex = Math.floor(Math.random() * quotes.length);
  motivation.textContent = quotes[randomIndex];
});