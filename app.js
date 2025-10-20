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

