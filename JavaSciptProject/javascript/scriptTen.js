function toggleMenu() {
    const menuList = document.getElementById('menu-list');
    menuList.classList.toggle('active');
}

let currentSlide = 1;
    showSlides(currentSlide);

    function changeSlide(n) {
        showSlides(currentSlide += n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length) { 
            currentSlide = 1;
        } 
        if (n < 1) { 
            currentSlide = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[currentSlide - 1].style.display = "block";
    }

    