const CANVAS_H = 930;
const CANVAS_W = Math.ceil((1280/1040)*CANVAS_H);
const TILE_W = 80;
const TILE_H = 65;
const TILE_S = CANVAS_H / TILE_H;

/**
 * Initializes the canvas's contents
 */
(async function startup() {
  const canvas = document.getElementById("editor");
  canvas.height = CANVAS_H;
  canvas.width = CANVAS_W;
  
  await drawStatic(canvas, '../stardew_assets/farm_fishing.jpg', 0, 0, CANVAS_W/TILE_S, CANVAS_H/TILE_S)
  await setGrid(canvas);
  await drawStatic(canvas, '../stardew_assets/farm_house.png', 59, 8, 9, 9);
  await drawStatic(canvas, '../stardew_assets/farm_greenhouse.png', 25, 8, 7, 8);
})();

/**
 * Draws a static resource to the canvas at the given position of the given
 * scale in tiles.
 * @param {HTMLCanvasElement} canvas Canvas being drawn to
 * @param {String} path Path to image resource being drawn
 * @param {Int} x Tile x-offset of where to place item
 * @param {Int} y Tile y-offset of where to place item
 * @param {Int} sx How wide to make the image in tiles.
 * @param {Int} sy How tall to make the image in tiles.
 */
function drawStatic(canvas, path, x, y, sx, sy) {
  const ctx = canvas.getContext("2d");
  return new Promise((res, rej) => {
    const ctx = canvas.getContext("2d");
    let img = new Image();
    img.onload = function() {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, x*TILE_S, y*TILE_S, sx*TILE_S, sy*TILE_S)
      res();
    };
    img.src = path;
  })
}

/**
 * Creates the gridlines that represent where the tiles are on the page.
 * @param {HTMLCanvasElement} canvas Canvas drawing grid to.
 */
async function setGrid(canvas) {
  const ctx = canvas.getContext("2d");
  for(let y = 1; y <= TILE_H; y++) {
    let lineH = TILE_S*y;
    ctx.moveTo(0, lineH);
    ctx.lineTo(CANVAS_W, lineH)
  }
  for(let x = 1; x <= TILE_W; x++) {
    let lineW = TILE_S*x;
    ctx.moveTo(lineW, 0);
    ctx.lineTo(lineW, CANVAS_H)
  }
  ctx.strokeStyle = 'rgba(100, 100, 100, 0.25)';
  ctx.stroke();
}