const form = document.querySelector("#form");
const inputs = document.querySelectorAll("#form input[type='text'], #form input[type='number']");
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

  // Get input values
  const nameValue = inputs[0]?.value.trim();
  const emailValue = inputs[1]?.value.trim();
  const numberValue = inputs[2]?.value.trim();

  // Validate inputs
  if (!nameValue) {
    alert("Please enter your name.");
    return;
  }
  if (!emailValue) {
    alert("Please enter your email.");
    return;
  }
  if (!numberValue) {
    alert("Please enter your number.");
    return;
  }

  if (cardGenerated) {
    alert("User card already generated.");
    return;
  }

  const file = fileInp.files[0];
  if (!file || !file.type.startsWith("image/")) {
    alert("Please select a valid image file.");
    return;
  }

  // Create card container
  let div = document.createElement("div");
  div.classList.add("user-card");

  // Create and handle image
  let img = document.createElement("img");
  img.alt = "User Image";
  
  const reader = new FileReader();
  reader.onload = function(event) {
    img.src = event.target.result;
    
    // Once image is loaded, append all elements
    div.appendChild(img);

    // Create name element
    let nameDiv = document.createElement("div");
    nameDiv.classList.add("user-name");
    nameDiv.textContent = nameValue;
    div.appendChild(nameDiv);

    // Create email element
    let emailDiv = document.createElement("div");
    emailDiv.classList.add("user-email");
    emailDiv.textContent = emailValue;
    div.appendChild(emailDiv);

    // Create number element
    let numberDiv = document.createElement("div");
    numberDiv.classList.add("user-number");
    numberDiv.textContent = numberValue;
    div.appendChild(numberDiv);

    // Append card to body
    document.body.appendChild(div);
    cardGenerated = true;
  };
  
  reader.onerror = function() {
    alert("Error reading the image file.");
  };
  
  reader.readAsDataURL(file);
});
