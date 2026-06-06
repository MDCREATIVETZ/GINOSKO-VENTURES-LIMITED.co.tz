document.addEventListener("DOMContentLoaded", () => {
    console.log("GINOSKO Premium Engine Initiated.");

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

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            const currentItem = this.parentElement;
            
            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("active");
                }
            });

            // Toggle active state for current item
            currentItem.classList.toggle("active");
        });
    });
});