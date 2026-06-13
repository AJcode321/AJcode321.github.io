const button = document.getElementById("button");
const button2 = document.getElementById("button2");
// 'More about me' now navigates to a separate about.html page.

button.addEventListener("click", () => {
  alert("You turned on dark mode");
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.body.style.textShadow = "-0.8px -0.8px 0 white, 0.8px -0.8px 0 white, -0.8px 0.8px 0 white, 0.8px 0.8px 0 white";
});

button2.addEventListener("click", () => {
  alert("You turned on light mode");
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.body.style.textShadow = "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black";
});

// No client-side editor behavior needed on this page.

