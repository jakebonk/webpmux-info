const webpmux_info = require('./index.js');

webpmux_info("./animated.webp").then((info)=>{
	console.log(info);
}).catch((e)=>{
	console.log(e);
});

webpmux_info("./image.webp").then((info)=>{
	console.log(info);
}).catch((e)=>{
	console.log(e);
});