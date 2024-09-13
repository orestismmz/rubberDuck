// const messages=JSON.parse(window.localStorage.getItem("messages")) || [];

// • We’re going to build our own Rubber Duck website: Mr.Duck
// • The website should have:
// • A header with, preferably, a rubber duck in a suite as logo.
// • A text input of some sort, allowing you to explain your problem to Mr. Duck
// • A button sending the message to Mr. Duck

// Extras:
// Hover effect
// • Add Easter egg Hover effect on Mr. Duck
// • Basically up to you, what kind of easter egg effect you want to do.
// • Don’t just use a simple CSS hover effect!
// • Add something more interessting.
// • E.g. Mr.Duck uses console.log() to write a message to the console, when you hover it.

// LocalStorage (supplementary)
// • We want the site to save all our messages, so it remembers our messages whenever we reload.
// • Procedure:
// • Whenever the user types a message, add the message to an array
// • Save that array to LocalStorage .
// • Whenever the site loads (add an event listener for “load”), the site retrieves the array from LocalStorage.
// • And fills the DOM, with the retrieved messages.

document.getElementById("button").addEventListener("click", function () {
  const questionInput = document.getElementById("question-input");
  const question = questionInput.value;
  console.log(question);
  const newQuestion = document.createElement("li");
  newQuestion.textContent = `- ${question}`;
  document.getElementById("questionList").appendChild(newQuestion);
  questionInput.value = "";
});

document.getElementById("logo").addEventListener("mouseover", () => {
  console.log("Tell me what the problem is, you useless developer!");
});
// LocalStorage (supplementary)
// • We want the site to save all our messages, so it remembers our messages whenever we reload.
// • Procedure:
// • Whenever the user types a message, add the message to an array
// • Save that array to LocalStorage .
// • Whenever the site loads (add an event listener for “load”), the site retrieves the array from LocalStorage.
// • And fills the DOM, with the retrieved messages.
