let getDiv = document.querySelector(".container");
let getImg = document.querySelector("img");

getImg.addEventListener("mouseover",() => {
  getImg.classList.add("zoom-in");
  getImg.classList.remove("zoom-out");
});

getDiv.addEventListener("mouseout",() => {
  getDiv.classList.add("hover-out");
  getImg.classList.add("zoom-out");
  getImg.classList.remove("zoom-in");
});