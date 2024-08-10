document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".carousel-control.prev");
  const nextButton = document.querySelector(".carousel-control.next");
  const carouselItems = document.querySelector(".carousel-items");
  const items = document.querySelectorAll(".carousel-item");
  const itemsVisible = 3; // Número de itens visíveis
  const totalItems = items.length;
  let itemsPerPage = window.innerWidth >= 1024 ? 3 : 1; // Ajuste o valor 1024 para a largura mínima do desktop desejada
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * (100 / itemsPerPage);
    carouselItems.style.transform = `translateX(${offset}%)`;
  }

  nextButton.addEventListener("click", function () {
    if (currentIndex < totalItems / itemsPerPage - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", function () {
    updateCarousel(); // Ajusta o carrossel em caso de redimensionamento
  });
});
