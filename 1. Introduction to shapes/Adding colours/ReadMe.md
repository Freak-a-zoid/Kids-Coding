# Adding color to your shapes.

To add color to the shapes we draw we need call the library function fill().

<a href="https://p5js.org/reference/#/p5/fill" target="_blank">https://p5js.org/reference/#/p5/fill</a>

The signature of the function is circle( r, g, b ) where
  - r is the green channel for the colour
  - g is the green channel for the colour
  - b is the blue channel for the colour

and each colour channel should be a value between 0 and 255.

The value determines how much of the specified channel's colour will be added to the final result.

For example the function call fill( 255, 0, 0 )
will set the colour to red and all shapes drawn after this API call will be drawn red.

Example 1:
<div>
  <code><object data="Example-1.js" width="400" height="300"></object></code>
</div>

To make our shapes blue, we need to call fill with the blue channel at 255 and 0 for both red and green channels.

Example 2:
<div>
  <code><object data="Example-2.js" width="400" height="300"></object></code>
</div>

We can also mix our colour channels to make more interesting colours.

Example 3:
<div>
  <code><object data="Example-3.js" width="400" height="300"></object></code>
</div>
