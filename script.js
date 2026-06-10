document.addEventListener("DOMContentLoaded", () => {
    console.log("GINOSKO Premium Engine Initiated.");

    // Reveal Animation
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function () {

            const currentItem = this.parentElement;

            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("active");
                }
            });

            currentItem.classList.toggle("active");
        });
    });

    // Team Cards Animation
    const teamCards = document.querySelectorAll(".team-card");

    teamCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";

        setTimeout(() => {
            card.style.transition = "all 0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 300 * index);
    });

    // Mobile Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

});