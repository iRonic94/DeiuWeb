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
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");

    const sectionOneOptions = {
        rootMargin: "-200px 0px 0px 0px"
    };

    const sectionOneObserver = new IntersectionObserver(function (
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
            } else {
                header.classList.remove("nav-scrolled");
            }
        });
    },
        sectionOneOptions);

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -250px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
        appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });


    //call the functions

    navigation();
    windowScroll();
    onclick();
})