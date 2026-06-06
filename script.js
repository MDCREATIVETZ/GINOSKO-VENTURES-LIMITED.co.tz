document.addEventListener("DOMContentLoaded", () => {
  console.log("GINOSKO Premium Engine Initiated.");

  // 1. SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER)
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target); // Prevents re-triggering animation
          }
      });
  }, {
      threshold: 0.12
  });

  revealElements.forEach(element => {
      revealOnScroll.observe(element);
  });


  // 2. FAQ ACCORDION INTERACTION
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(question => {
      question.addEventListener("click", function() {
          const currentItem = this.parentElement;
          
          // Close any other open FAQ items first for premium look
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