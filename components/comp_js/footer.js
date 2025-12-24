fetch("/components/comp_html/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  })
  .catch((err) => console.error("Failed to load footer:", err));
