function spawn() {
  const aspectRatio = 1920 / 1080; // Set aspect ration to 16:9
  const imgSize = 360; // set the size of the default character image

  let img = new Image(imgSize * aspectRatio, imgSize); // create the image element
  img.src = "../../../../assets/pixel-art/character/default.png"; // set the image on the element to the Default Character image

  document.body.appendChild(img); // Put Default Character on screen
}

export default spawn;
