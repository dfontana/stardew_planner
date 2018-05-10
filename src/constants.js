const CANVAS_H = 1000; // Must be multiple of 65
const CANVAS_W = Math.ceil((1280/1040)*CANVAS_H);
const TILE_W = 80;
const TILE_H = 65;
const TILE_S = CANVAS_H / TILE_H;

export { CANVAS_H, CANVAS_W, TILE_W, TILE_H, TILE_S }