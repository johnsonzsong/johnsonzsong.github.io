function onLoad() {
    // ----------------- HERO -----------------
    const hero = document.querySelector('.hero');
    const slider = document.querySelector('.slider');
    const headline = document.querySelector('.headline');
    const arrow = document.querySelector('.arrow');

    const tl = new TimelineMax();
    tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
        .fromTo(
            hero,
            1.2,
            { width: "100%" },
            { width: "80%", ease: Power2.easeInOut }
        )
        .fromTo(
            slider,
            1.2,
            { x: "-100%" },
            { x: "0%", ease: Power2.easeInOut },
            "-=1.2"
        )
        .fromTo(
            headline,
            0.5,
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0 },
            "-=0.5"
        )

    const tl2 = new TimelineMax({ repeat: -1 });
    tl2.set('.portfolio', { autoAlpha: 0 });
    tl2.to('.portfolio', {
        duration: 2,
        ease: "Power2.easeInOut",
        autoAlpha: 1,
        stagger: {
            each: 4,
            repeat: 1,
            yoyo: true,
            yoyoEase: false
        }
    })

    TweenMax.to(arrow, 1.5, {
        y: "+=15px",
        yoyo: true,
        ease: Power4.yoyoEase,
        repeat: -1,
        delay: 2
    })


    // ----------------- NAVIGATION -----------------
    const burger = document.querySelector('.burger');
    const navLinkContainers = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        navLinkContainers.classList.toggle('nav-active');

        // Link animations
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        })

        // Burger animation
        burger.classList.toggle('toggle');
    })
}

window.onload = onLoad();