const carousel = document.getElementById("carousel");
const progressBar = document.getElementById("progressBar");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const progress = document.querySelector(".progress");

let startX = 0;
let isDragging = false;

// Update progress bar
const updateProgress = () => {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  const percent = (carousel.scrollLeft / maxScroll) * 100;
  progressBar.style.width = `${percent}%`;
};

// Drag / swipe
const startDrag = (x) => {
  startX = x;
  isDragging = true;
};

const endDrag = (x) => {
  if (!isDragging) return;
  carousel.scrollLeft -= x - startX;
  isDragging = false;
};

// Touch
carousel.addEventListener("touchstart", (e) => startDrag(e.touches[0].clientX));
carousel.addEventListener("touchend", (e) =>
  endDrag(e.changedTouches[0].clientX)
);

// Mouse
carousel.addEventListener("mousedown", (e) => startDrag(e.clientX));
carousel.addEventListener("mouseup", (e) => endDrag(e.clientX));

// Scroll update
carousel.addEventListener("scroll", updateProgress);

// Arrows
rightArrow.onclick = () => carousel.scrollBy({ left: 300, behavior: "smooth" });

leftArrow.onclick = () => carousel.scrollBy({ left: -300, behavior: "smooth" });

// Clickable progress bar
progress.onclick = (e) => {
  const rect = progress.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  carousel.scrollLeft = percent * (carousel.scrollWidth - carousel.clientWidth);
};
