const images = document.querySelectorAll('.Gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showLightbox();
  });
});

function showLightbox() {
  lightbox.style.display = 'flex';
  lightboxImage.src = images[currentIndex].src;


  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === images.length - 1;
}


function hideLightbox() {
  lightbox.style.display = 'none';
}

closeBtn.addEventListener('click', hideLightbox);

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showLightbox();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showLightbox();
});
