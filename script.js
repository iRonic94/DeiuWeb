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
        if (button) {
            button.addEventListener('click', topFunction);
        }
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

    //infinit scroller
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", true);

            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }
    //call the functions
    navigation();
    windowScroll();
    onclick();
});

