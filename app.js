const form =  document.querySelector("#form");
const input = document.querySelectorAll("input");
const fileInp = document.querySelector("#fileInp");

const btn = document.querySelector("#btn");
btn.addEventListener("click" ,()=>{
fileInp.click();

})

fileInp.addEventListener("change" ,(event)=>{
    const file = event.target.files[0]
    if(file){
        btn.textContent = file.name
    }
});
 

form.addEventListener("submit" ,(eve)=>{
    eve.preventDefault();
    let div = document.createElement("div");
div.classList.add("user-card");

let img = document.createElement("img");
  img.src = "https://randomuser.me/api/portraits/men/32.jpg"; 

div.appendChild(img);
let h2 = document.createElement("div");
h2.classList.add("user-name");
h2.textContent = "John Doe"; // 
div.appendChild(h2);

let h3  = document.createElement("div");
h3.classList.add("user-email");
  h3.textContent = "john.doe@example.com";

div.appendChild(h3);
let p = document.createElement("div"); 
p.classList.add("user-number");
  p.textContent = "+1 234 567 8901";
div.appendChild(p);
document.body.appendChild(div);

})