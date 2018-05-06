const CANVAS_H = 910; // Must be multiple of 65
const CANVAS_W = Math.ceil((1280/1040)*CANVAS_H);
const TILE_W = 80;
const TILE_H = 65;
const TILE_S = CANVAS_H / TILE_H;

/**
 * On-Screen canvas (Foreground, highlights, & background)
 */
const foreground = document.getElementById("editor-foreground");
foreground.height = CANVAS_H;
foreground.width = CANVAS_W;
foreground.onmousemove = highlight;
const fg_ctx = foreground.getContext("2d");

const highlights = document.getElementById("editor-highlights");
highlights.height = CANVAS_H;
highlights.width = CANVAS_W;
const hi_ctx = highlights.getContext("2d");

const background = document.getElementById("editor-background");
background.height = CANVAS_H;
background.width = CANVAS_W;

/**
 * Off-Screen canvas
 */
let hi_off_cvs = document.createElement('canvas');
hi_off_cvs.width = CANVAS_W;
hi_off_cvs.height = CANVAS_H;
let hi_off_ctx = hi_off_cvs.getContext("2d");

/**
 * Gentle render loop.
 */
function render() {
  hi_ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
  hi_ctx.drawImage(hi_off_cvs, 0, 0)
  requestAnimationFrame(render);
}

async function drawHomes(ctx) {
  await drawStatic(ctx, '../stardew_assets/farm_house.png', 59, 8, 9, 9);
  await drawStatic(ctx, '../stardew_assets/farm_greenhouse.png', 25, 8, 7, 8);
}

function highlight(e) {
  hi_off_ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
  hi_off_ctx.beginPath();

  let tileX = Math.floor(e.offsetX / TILE_S) * TILE_S
  hi_off_ctx.moveTo(tileX, 0);
  hi_off_ctx.lineTo(tileX, CANVAS_H)
  hi_off_ctx.moveTo(tileX+TILE_S, 0);
  hi_off_ctx.lineTo(tileX+TILE_S, CANVAS_H)

  let tileY = Math.floor(e.offsetY / TILE_S) * TILE_S
  hi_off_ctx.moveTo(0, tileY);
  hi_off_ctx.lineTo(CANVAS_W, tileY)
  hi_off_ctx.moveTo(0, tileY+TILE_S);
  hi_off_ctx.lineTo(CANVAS_W, tileY+TILE_S)

  hi_off_ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
  hi_off_ctx.stroke();
}

/**
 * Draws a static resource to the canvas at the given position of the given
 * scale in tiles.
 * @param {Context} ctx Context being drawn to
 * @param {String} path Path to image resource being drawn
 * @param {Int} x Tile x-offset of where to place item
 * @param {Int} y Tile y-offset of where to place item
 * @param {Int} sx How wide to make the image in tiles.
 * @param {Int} sy How tall to make the image in tiles.
 */
function drawStatic(ctx, path, x, y, sx, sy) {
  return new Promise((res, rej) => {
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
 * Prepare the background canvas (one time action)
 * Draw the initial foreground.
 */
(async function setup(){
  const ctx = background.getContext("2d");
  await drawStatic(ctx, '../stardew_assets/farm_fishing.jpg', 0, 0, CANVAS_W/TILE_S, CANVAS_H/TILE_S)
  ctx.beginPath();
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
  drawHomes(fg_ctx);
})();

/**
 * Start render loop
 */
render();