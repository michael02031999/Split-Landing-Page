imagecontainer1 = document.getElementById("imageContainer1");
imagecontainer2 = document.getElementById("imageContainer2");
Title2 = document.getElementById("title2");

imagecontainer1.addEventListener("mouseenter", () => {
  imagecontainer1.style.width = "75%";
  imagecontainer2.style.width = "25%";
});

imagecontainer2.addEventListener("mouseenter", () => {
  imagecontainer2.style.width = "75%";
  imagecontainer1.style.width = "25%";
});

imagecontainer2.addEventListener("mouseleave", () => {
  imagecontainer2.style.width = "50%";
  imagecontainer1.style.width = "50%";
});

imagecontainer1.addEventListener("mouseleave", () => {
  imagecontainer2.style.width = "50%";
  imagecontainer1.style.width = "50%";
});
