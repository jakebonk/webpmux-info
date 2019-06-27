const webpmux_info = require('./index.js');

webpmux_info.webpinfo("./animated.webp").then((info)=>{
	console.log(info);
}).catch((e)=>{
	console.log(e);
});