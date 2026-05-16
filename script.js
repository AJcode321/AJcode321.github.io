function tester() {
  console.log("test");  
}

function colors()
{
  document.querySelector("h1").style.color = "red";
}

const button = document.getElementById("button");

     
     button.onclick = () => { 
     alert("you turned on dark mode"); 
     document.body.style.backgroundColor = "black"; 
     document.body.style.textShadow = "-0.8px -0.8px 0 white, 0.8px -0.8px 0 white, -0.8px  0.8px 0 white, 0.8px  0.8px 0 white"
  }

const button2 = document.getElementById("button2");

     button2.onclick = () => {
  alert("you turned on light mode");
  document.body.style.backgroundColor = "white";
  document.body.style.textShadow = "-1px -1px 0 black, 1px -1px 0 black, -1px  1px 0 black, 1px  1px 0 black"
  }

document.querySelector("#button").addEventListener("click", () => { tester() })
