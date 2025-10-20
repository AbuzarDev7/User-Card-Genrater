const form =  document.querySelector("#form");
const input = document.querySelectorAll("input");
const fileInp = document.querySelector("#fileInp");

const btn = document.querySelector("#btn");
btn.addEventListener("click" ,()=>{
fileInp.click();

})

fileInp.addEventListener("change" ,(event)=>{
    console.log(event.target.files );
console.log("change file");
})