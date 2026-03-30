const buttons = document.querySelectorAll(".toggleprep");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const prep = btn.nextElementSibling;

    if (prep.style.display === "none" || prep.style.display === "") {
      prep.style.display = "block";
    } else {
      prep.style.display = "none";
    }
  });
});
