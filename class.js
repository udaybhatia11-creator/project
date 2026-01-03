function loadHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadHTML("header", "includes/index.html");
loadHTML("footer", "includes/index.html");
