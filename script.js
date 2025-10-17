// Typing animation
const text = "Who Am I ?";
const el = document.getElementById("typewriter");
const cursor = document.querySelector(".cursor");
let index = 0;
let deleting = false;

function typeEffect() {
  cursor.classList.remove("blink");

  if (!deleting && index <= text.length) {
    el.textContent = text.substring(0, index);
    index++;
    setTimeout(typeEffect, 150);
  } else if (deleting && index >= 0) {
    el.textContent = text.substring(0, index);
    index--;
    setTimeout(typeEffect, 100);
  } else {
    deleting = !deleting;
    cursor.classList.add("blink");
    setTimeout(typeEffect, 800);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Achievements Counter
const counters = document.querySelectorAll(".count");
const speed = 100;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// Contact form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully 🚀");
    this.reset();
  });
