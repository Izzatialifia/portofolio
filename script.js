const texts = ["Hello, I'm Ichaa", "Welcome to My Portfolio", "Enjoy Exploring!"];
let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  currentText = texts[count];
  
  if (isDeleting) {
    document.getElementById("typing").textContent = currentText.substring(0, index--);
  } else {
    document.getElementById("typing").textContent = currentText.substring(0, index++);
  }

  if (!isDeleting && index === currentText.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // jeda sebelum hapus
    return;
  }

  if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
  }

  setTimeout(typeEffect, isDeleting ? 100 : 150); // kecepatan hapus / ngetik
}

window.onload = typeEffect;

