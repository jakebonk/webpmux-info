var path   = require('path');

var knowos=function()
{
if (process.platform === 'darwin') {

    return  __dirname.replace(/\\/g,"/") + '/lib/osx/bin/webpmux';

}else if (process.platform === 'linux') {

   return  __dirname.replace(/\\/g,"/") + '/lib/linux/bin/webpmux';

}else if (process.platform === 'win32') {
    
   return __dirname.replace(/\\/g,"/") + '/lib/win32/bin/webpmux.exe';

} else {
    console.log('Unsupported platform:', process.platform, process.arch);
}
};

module.exports = knowos;