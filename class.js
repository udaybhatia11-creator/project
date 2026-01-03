function loadPage(page) {
    fetch(page + ".html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("root").innerHTML = data;
        });
}

loadPage("Upreach");
