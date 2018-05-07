import { TILE_S, CANVAS_W, CANVAS_H } from '../constants'

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
 * Corrects the scaling of canvases to be represetative of the browser running it.
 * @param {HTMLCanvasElement} canvas Canvas to set size of
 * @param {HTMLCanvasContext} ctx Context to set the scale of
 */
function setScale(canvas, ctx) {
  canvas.width = CANVAS_W*2;
  canvas.height = CANVAS_H*2;
  canvas.style.width = `${CANVAS_W}px`;
  canvas.style.height = `${CANVAS_H}px`;
  let multi = window.devicePixelRatio || 1
  ctx.scale(multi,multi)
}

/**
 * Converts a coordinate to a tile. The returned tile will be inclusive 
 * of the tile the user clicked within.
 * @param {Float} coor Coordinate in need of translation.
 */
function tile(coor) {
  return Math.floor(coor/TILE_S)+1
}

/**
 * Converts the given tile coordinate into an coorindate on the Canvas.
 * @param {Int} tile Tile to translate
 */
function scrn(tile) {
  return Math.floor((tile-1)*TILE_S)
}

export { drawStatic, setScale, tile, scrn };