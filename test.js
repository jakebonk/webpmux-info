const webpmux_info = require('./index.js');
webpmux_info("./animated.webp").then(function(animated_info){
	console.log(animated_info);
});
webpmux_info("./image.webp").then(function(image_info){
	console.log(image_info);
});
