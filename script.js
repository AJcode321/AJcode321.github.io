function tester() {
  console.log("test");  
}

function colors()
{
  document.querySelector("h1").style.color = "red";
}

const button = document.getElementById("button");


  button.onclick = () => { 
     alert("you clicked the button"); 
     document.body.style.backgroundColor = "blue"; 
  }

document.querySelector("p").style.color = "yellow";
document.querySelector("#button").addEventListener("click", () => { tester() })