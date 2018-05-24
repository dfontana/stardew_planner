#Stardew Planner (Name Pending...)

A farm layout planner designed for the popular indie game, Stardew Valley. The project is currently under heavy work, meaning its not yet published. For those curious, the planner takes advantage of ReactJs, Styled-Components, and HTML5 Canvas to (hopefully) create a buttery-smooth user experience.

## Todo
- [x] Render static assets (such as farm background, buildings).
- [x] Place assets within a canvas context for interacting
- [x] Build a pixel-perfect grid system
- [x] Define regions that are valid for interaction on the farm
- [x] Define the layout for the site's tools
- [x] Build tool palettes
- [ ] Add a basic **stamp** to the *stamp palette* that can interact with the canvas from the palette
- [ ] Render a 1x1 static asset from a palette interaction with the canvas, in a valid way only
 - Valid way: can fit in valid region of farm; does not intersect another stamp. 
- [ ] Render a larger than 1x1 static asset from a palette interaction with the canvas, in a valid way only
- [ ] Add a **delete** tool to the *tool palette* for removing single assets
- [ ] Flesh out 'workflow'
 - Should there be just one larger palette, with sections?
 - How does it move out of the user's way?
 - What interactions from palette to canvas can occur?
- [ ] Highlight under the mouse to indicate if the current square is valid for placement (Instead of giant red blob)
- [ ] Finish styling palettes
- [ ] Saving and loading layouts (export as JSON, import from JSON?)
- [ ] Add more stamps to the stamp palette, with their assets
- [ ] Add more tools beyond to the tools palette: **move**, **eyedropper**
- [ ] Add keybinds for tools
- [ ] Gesture: *drag* to place successive stamps.
- [ ] Undo & Redo?
