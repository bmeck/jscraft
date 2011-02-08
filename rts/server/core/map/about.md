Map info is based upon the idea that the map should never ever change.
Terrain that can change should be implemented through map items.

A map is a simple representation of a grid of terrain.
In the future it may have multiple layers (or 3d blocks) of terrain.

Terrain is a simple block shape currently,
 but with access to its location and the map for display and interaction logic.
When characters move around the map they will register when they move onto and out of terrain types.

Weather may be useful for your game and as such is supported.
Weather is a series of blocks as well, but can move as a unit.
Weather that collides with eachother will register the event on both units.