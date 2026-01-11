const carousel = document.getElementById("carouself");
const progressBar = document.getElementById("progressBarf");
const leftArrow = document.getElementById("prevBtnf");
const rightArrow = document.getElementById("nextBtnf");

let isDragging = false;
let startX = 0;

// Progress bar
const updateProgress = () => {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  if (maxScroll <= 0) return;
  progressBar.style.width = `${(carousel.scrollLeft / maxScroll) * 100}%`;
};

// Drag start
carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
});
carousel.addEventListener("mouseup", () => (isDragging = false));
carousel.addEventListener("mouseleave", () => (isDragging = false));

// Drag move
carousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  carousel.scrollLeft -= e.movementX;
});

// Touch
carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
carousel.addEventListener("touchmove", (e) => {
  carousel.scrollLeft -= e.touches[0].clientX - startX;
  startX = e.touches[0].clientX;
});

// Arrows
rightArrow.onclick = () => carousel.scrollBy({ left: 320, behavior: "smooth" });
leftArrow.onclick = () => carousel.scrollBy({ left: -320, behavior: "smooth" });

// Scroll update
carousel.addEventListener("scroll", updateProgress);
