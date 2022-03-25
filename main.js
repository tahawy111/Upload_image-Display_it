const image_input = document.getElementById("image_input");
const display_image = document.getElementById("display_image");

function getImagePreview(event) {
  let image = URL.createObjectURL(event.target.files[0]);
  let newImg = document.createElement("img");
  display_image.innerHTML = "";
  newImg.src = image;
  display_image.append(newImg);
}
// the video Explain https://youtu.be/_u_GiyTcsjA
