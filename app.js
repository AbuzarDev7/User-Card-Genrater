const form = document.querySelector("#form");
const input = document.querySelectorAll("input");
const fileInp = document.querySelector("#fileInp");
const btn = document.querySelector("#btn");


btn.addEventListener("click", () => {
  fileInp.click();
});


fileInp.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    btn.textContent = file.name;
  }
});

let cardGenerated = false;

form.addEventListener("submit", (eve) => {
  eve.preventDefault();

  if (cardGenerated) {
    alert("User card already generated.");
    return;
  }

  let div = document.createElement("div");
  div.classList.add("user-card");


  let img = document.createElement("img");
  const file = input[3].files[0];

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (event) {
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please select a valid image file.");
    return;
  }

  div.appendChild(img);


  let h2 = document.createElement("div");
  h2.classList.add("user-name");
  h2.textContent = input[0].value;
  div.appendChild(h2);


  let h3 = document.createElement("div");
  h3.classList.add("user-email");
  h3.textContent = input[1].value;
  div.appendChild(h3);

 
  let p = document.createElement("div");
  p.classList.add("user-number");
  p.textContent = input[2].value;
  div.appendChild(p);

  document.body.appendChild(div);

  cardGenerated = true;
});
