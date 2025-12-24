fetch("/components/comp_html/nav.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("nav-component").innerHTML = data;

    const hamburger = document.querySelector(".hamburger");
    const cancelBtn = document.querySelector(".cancel");
    const mobileNav = document.querySelector(".mobile_nav");

    hamburger.addEventListener("click", () => {
      mobileNav.classList.add("active");
    });

    cancelBtn.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
