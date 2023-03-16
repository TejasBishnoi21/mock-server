console.log("jai shree ram");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = {
    name:document.getElementById("name").value,
    rollNo:document.getElementById("roll").value,
  };
  console.log(data);

  

});
