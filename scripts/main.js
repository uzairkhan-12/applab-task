document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const navLinks = document.getElementById("nav-links");
  
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      navLinks.classList.toggle("hidden");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const marquee = document.querySelector(".animate-marquee");
    let speed = 10;

    marquee.style.animationDuration = `${speed}s`;
});

document.addEventListener("DOMContentLoaded", function () {
  const nationalBtn = document.getElementById("national-btn");
  const otherBtn = document.getElementById("other-btn");

  function toggleActive(clicked, other) {
      clicked.classList.add("bg-[#2f1a45]", "text-white");
      clicked.classList.remove("text-[#958ba0]");
      
      other.classList.remove("bg-[#2f1a45]", "text-white");
      other.classList.add("text-[#958ba0]");
  }

  nationalBtn.addEventListener("click", () => toggleActive(nationalBtn, otherBtn));
  otherBtn.addEventListener("click", () => toggleActive(otherBtn, nationalBtn));
});
