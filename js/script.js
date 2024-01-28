// Mange mobile navigation list
let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");

let linksList = document.querySelector(".links ul");

hamburger.onclick = function () {
  linksList.classList.toggle("open");
};
close.onclick = function () {
  linksList.classList.remove("open");
  K;
};

// Mange testimonial pagination
let testimonial_pieces = document.querySelectorAll(".testimonial .users .user");
let bulltes = document.querySelectorAll(".testimonial .popup span");

bulltes.forEach((bullet) => {
  bullet.addEventListener("click", function () {
    let clickedBullet = Array.from(bulltes).indexOf(bullet);
    for (let i = 0; i < bulltes.length; i++) {
      testimonial_pieces[i].classList.remove("active");
      bulltes[i].classList.remove("orange");
    }
    testimonial_pieces[clickedBullet].classList.remove("hidden");
    testimonial_pieces[clickedBullet].classList.add("active");
    bulltes[clickedBullet].classList.add("orange");
  });
});
