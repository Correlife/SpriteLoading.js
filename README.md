# SpriteLoading.js
Display loading in/out animations using a sprite image.

## Installation
After including jQuery, include SpriteLoading.js or SpriteLoading.min.js in your HTML:
```html
<script src="https://raw.githubusercontent.com/Correlife/SpriteLoading.js/master/SpriteLoading.min.js"></script>
```

## Usage
Start the loading animation:
```javascript
var loading = new SpriteLoading($('#your_container'), {theme: 'dark'});
```
When the loading is done, finish the animation:
```javascript
loading.finish(function(){alert("Loading complete!");})
```

## About
Use SpriteLoading when:
<ul>
<li>You want to display an animation that cannot be achieved using CSS</li>
<li>You need antialiased transparent animations (unlike GIF, or where APNG is not supported)</li>
<li>You need to control the timing if in/loop/out animations</li>
</ul>
SpriteLoading starts with an animation (in), then loops another animation (loop), and when instructed to finish it ends with the last animation (out).
Each animation will complete before moving to the next one for a smooth transition.
The animation will spawn in the center of the container (both horizontally and vertically).

## Options
This is the complete options object:
```javascript
var loading = new SpriteLoading($('#your_container'), {
    width: 60,
    height: 60,
    delay: 40,
    frames: {
        start: 1,
        loop_start: 12,
        loop_end: 35,
        out_end: 45
    },
    theme: 'light',
    sprite_url: 'https://correlife.org/img/loading.png',
    sprite_url_dark: 'https://correlife.org/img/loading-dark.png'
});
```
| Parameter         | Description   |
| ----------------- | ------------- |
| width             | The width of each frame in pixels |
| height            | The height of each frame in pixels  |
| delay             | The amount of time to wait between frames in milliseconds  |
| frames.start      | The number of the frame the animation starts with (in), usually 1  |
| frames.loop_start | The number of the first frame of the loop  |
| frames.loop_end   | The number of the last frame of the loop  |
| frames.out_end    | The number of the last frame of the animation (out) |
| theme             | Options: light/dark Default: light  |
| sprite_url        | The url to the light themed sprite  |
| sprite_url_dark   | The url to the dark themed sprite |

## Creating custom animations
Create a single vertical sprite (where each frame of the animation is below the previous one) and use the sprite_url to point to it. PNGs work best because of the alpha channel. The frames should be in the in-out-loop order.
There are many sprite generators to convert individual files to a single sprite, for example this tool: http://www.cssportal.com/css-sprite-generator/
Finally, set the width/height/frames options according to your animation.

## Credits
Guy Brukhis, Correlife.org

## License
MIT
