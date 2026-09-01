/* =========================================================================
   FOODIES — MAIN JAVASCRIPT
   Handles: (1) animated stat counters, (2) sticky navbar background on
   scroll, and (3) auto-closing the mobile nav menu after a link is tapped.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /**
   * Animates a number from `start` to `end` inside the element with the
   * given `id`, finishing in approximately `duration` milliseconds.
   * Used for the 4 stat counters in the "counter" section (Savings,
   * Photos, Dishes Types, Globes).
   */
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    if (!obj) return; // bail out safely if the element isn't on the page

    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1; // count up or down depending on direction

    // How often (ms) to bump the number by 1, spread evenly across `duration`
    let step = Math.max(1, Math.abs(Math.floor(duration / range)));

    // Show the starting value immediately
    obj.textContent = current;

    let timer = setInterval(() => {
      current += increment;
      obj.textContent = current;

      // Stop the interval once we've reached the target number
      if (current === end) {
        clearInterval(timer);
      }
    }, step);
  }

  // Kick off each counter: (element id, start value, end value, duration in ms)
  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 2871, 2500);
  counter("count3", 0, 1280, 3300);
  counter("count4", 0, 1487, 3100);
});

/* ---------- Sticky navbar background on scroll ----------
   Adds the "scroll-on" class (solid white background + shadow, see
   style.css) once the user scrolls down more than 20px, and removes it
   when they scroll back near the top. */
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};

/* ---------- Auto-close mobile nav menu on link click ----------
   On mobile, the nav links live inside a collapsed Bootstrap menu.
   Without this, tapping a link would leave the menu open after
   navigating to the section. This forces it closed on every click. */
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    });
});