var exec = require('child_process').execFile;//get child_process module
const webpmux = require('./webpmux');

module.exports = (file_name,callback) => {	
		try{
		var query = '-info '+ file_name;
		exec(webpmux(), query.split(/\s+/),(err,stdout,stderr)=>{
			if(err)
				callback(null,err);				
			var data = stdout.split(/[\r\n]/);
			for(var i = data.length-1; i >= 0;i--){
				if(data[i] == ''){
					data.splice(i,1);
				}
			}			
			var info = {};
			const CANVAS_SIZE_PATTERN = /canvas\s+size:\s+(\d+)\s+x\s+(\d+)/i;
			const FEATURES_PRESENT_PATTERN = /features\s+present:\s+(\w+)/i;
			const BG_COLOR_LOOP_COUNT_PATTERN = /background\s+color\s+:\s+(\w+)\s+loop\s+count\s+:\s+(\d+)/i;
			const NUMBER_OF_FRAMES = /number\s+of\s+frames:\s+(\d+)/i;
			const FRAME_PATTERN = /(\d+):\s+(\d+)\s+(\d+)\s+(\w+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\w+)\s+(\w+)\s+(\d+)\s+(\w+)/i;
			for(var i = 0;i < data.length;i++){
				try{		
					if(info.canvas == undefined || info.canvas == null){
						var size = CANVAS_SIZE_PATTERN.exec(data[i].trim());
						info.canvas = {"width":size[1],"height":size[2]};
					}
				}catch(e){}		
				try{
					if(info.features == undefined || info.features == null){
						info.features = FEATURES_PRESENT_PATTERN.exec(data[i].trim())[1];		
					}
				}catch(e){}
				try{
					if(info.background_color == undefined || info.background_color == null || info.loop_count == undefined || info.loop_count == null){
						var bg_loop_count = BG_COLOR_LOOP_COUNT_PATTERN.exec(data[i].trim());	
						info.background_color = bg_loop_count[1];
						info.loop_count = bg_loop_count[2];	
					}
				}catch(e){}
				try{
					if(info.frames == undefined || info.frames == null){
						info.frames = NUMBER_OF_FRAMES.exec(data[i].trim())[1];
					}
				}catch(e){}
				try{
					var frame = FRAME_PATTERN.exec(data[i].trim());			
					if(frame != undefined && frame != null){
						if(info.pages == undefined || info.pages == null){
							info.pages = [];
							info.total_duration = 0;
						}
						info.pages.push({"width":frame[2],"height":frame[3],"alpha":frame[4],"x_offset":frame[5],"y_offset":frame[6],"duration":frame[7],"dispose":frame[8],"blend":frame[9],"image_size":frame[10],"compression":frame[11]});
						var duration = parseInt(frame[7]);
						if(!isNaN(duration)){
							info.total_duration += duration;
						}	
					}
				}catch(e){}
			}
			callback(info,null);
		});
	}catch(e){
		callback(null,e);
	}
}