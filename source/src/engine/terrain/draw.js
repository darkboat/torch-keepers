function drawSquare(ctx, spaceTaken, y, w, h) {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(spaceTaken + 50, y, w, h);
  ctx.stroke();

  return spaceTaken + w;
}

export default drawSquare;
