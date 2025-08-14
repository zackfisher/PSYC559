document.addEventListener("DOMContentLoaded", function () {
  console.log("Spoiler JS loaded."); 
  document.querySelectorAll(".spoiler").forEach(el => {
    el.addEventListener("click", function () {
      console.log("Clicked spoiler!");
      el.classList.toggle("revealed");
    });
  });
});
