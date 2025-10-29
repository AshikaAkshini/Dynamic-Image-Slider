const images = [
  {
    src: "https://picsum.photos/id/1018/800/400",
    caption: "Mountain View"
  },
  {
    src: "https://picsum.photos/id/1020/800/400",
    caption: "Wild Animal"
  },
  {
    src: "https://picsum.photos/id/1024/800/400",
    caption: "Wild Bird"
  },
  {
    src: "https://picsum.photos/id/1037/800/400",
    caption: "Sun Shine"
  }
];

const slideContainer = document.getElementById("slideContainer");
const dotsContainer = document.getElementById("dotsContainer");
const captionText = document.getElementById("captionText");
let currentIndex = 0;

images.forEach((imgObj, index) => {
  const img = document.createElement("img");
  img.src = imgObj.src;
  slideContainer.appendChild(img);

  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

const totalSlides = images.length;
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  currentIndex = (index + totalSlides) % totalSlides;
  slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
  captionText.textContent = images[currentIndex].caption;
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

setInterval(() => {
  moveSlide(1);
}, 3000);

showSlide(currentIndex);
