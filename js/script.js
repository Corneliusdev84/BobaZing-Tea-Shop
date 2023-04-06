function createBubble() {
    const section = document.querySelector('section')
    const createElement = document.createElement('span')
    let size = Math.random() * 60;

    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 4000)
}
  setInterval(createBubble, 50)

  const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

// Set the first slide to active
slides[currentIndex].classList.add("active");

// Click handlers for the prev and next buttons
prevBtn.addEventListener("click", () => {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
});

nextBtn.addEventListener("click", () => {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
});


