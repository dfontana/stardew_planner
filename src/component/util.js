import { TILE_S } from '../constants'

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

export default drawStatic;