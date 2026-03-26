const button1 = document.getElementById("button1");
const message1 = document.getElementById("message1");

button1.addEventListener("click", function(){
    if (message1.classList.contains("visible")) {
        message1.classList.remove("visible");
        message1.textContent= "";
    } else {
        message1.textContent = "This means you are a morning bird🐦";
        message1.classList.add("visible");
    }
});

const button2 = document.getElementById("button2")
const message2 = document.getElementById("message2")

button2.addEventListener("click", function(){
    if (message2.classList.contains("visible")) {
        message2.classList.remove("visible");
        message2.textContent = "";
    } else {
        message2.textContent = "SO, you're probably a night owl🦉"; 
        message2.classList.add ("visible");
    }
});
