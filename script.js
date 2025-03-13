document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    function navigation() {
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
    //show button for going up
    function windowScroll() {
        window.onscroll = function () {
            const button = document.querySelector('.scroll-button');
            if (document.documentElement.scrollTop > 50) {
                button.style.display = 'flex';
            } else {
                button.style.display = 'none';
            }
        }
    }
    //action for onclick button
    function topFunction() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function onclick() {
        const button = document.querySelector('.scroll-button');
        button.addEventListener('click', topFunction);
    }

    //animation slide left-right and right-left content
    const elementsToObserve = document.querySelectorAll(".slide-in");

    const checkVisibility = () => {
        elementsToObserve.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 350) {
                el.classList.add("appear");
            }
        });
    };

    // Run check on scroll
    window.addEventListener("scroll", checkVisibility);
    //call the functions
    navigation();
    windowScroll();
    onclick();
})