[![npm version](https://badge.fury.io/js/webpmux-info.svg)](https://badge.fury.io/js/webpmux-info)

# webpmux-info 
This package uses webpmux and parses it into a javascript object.

## Install

```
npm install webpmux-info
```

## Usage

```javascript
const webpmux_info = require('webpmux-info');

webpmux_info("./image.webp").then((animated_info)=>{
	
}).catch((err)=>{
  console.log(err);
});
```
An example of how the response data would look

```javascript
{ 
  canvas: { width: '365', height: '372' },
  features: 'animation',
  background_color: '0x00000000',
  loop_count: '0',
  frames: '25',
  total_duration: 2250,
  pages:
   [ 
      {
       width: '365',
       height: '372',
       alpha: 'no',
       x_offset: '0',
       y_offset: '0',
       duration: '90',
       dispose: 'none',
       blend: 'no',
       image_size: '44312',
       compression: 'lossless' 
      },
      ...
   ]
```
