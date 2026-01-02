function subscribe() {
  const email = document.getElementById('email').value;

  if (email==="") {
   alert("Please enter a valid email");
  } else {
   alert("thanks for subscribeing " + email);
  }
}

function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("show");
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 20) {
    header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.4)";
  } else {
    header.style.boxShadow = "none";
  }
});