document.addEventListener("DOMContentLoaded", function () {
    const imageScroller = document.querySelector('.image-scroller');
    const images = document.querySelectorAll('.slider-image');

    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Automatic image transition every 5 seconds
    setInterval(nextImage, 4000);
});

