const funfacts= [
    "46% of people hit the snooze button just to sleep for a few more minutes.",
    "Has it happened to you that you wake up a few minutes before your alarm goes off? That is thanks to our biological clock that adapts to our routines.",
    "17 billion cups of coffee are consumed daily worldwide, 65% of which are drunk in the morning, which is equivalent to over 11 billion cups during breakfast hours alone.",
    "The word breakfast literally means breaking the fast from the previous night.",
    "Exposure to morning sunlight helps regulate your circadian rhythm and improves sleep quality at night.",
    "The world's oldest person often attributes their longevity to a consistent morning routine."
];

const funfactbtn = document.getElementById("funfact-btn");
const text= document.getElementById("funfact");

funfactbtn.addEventListener("click", () => {

  const randomIndex = Math.floor(Math.random() * funfacts.length);
  text.textContent = funfacts[randomIndex];
});