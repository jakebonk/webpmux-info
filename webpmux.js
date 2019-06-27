var path   = require('path');

var knowos=function()
{
if (process.platform === 'darwin') {

    return  './lib/osx/bin/webpmux';

}else if (process.platform === 'linux') {

   return  './lib/linux/bin/webpmux';

}else if (process.platform === 'win32') {
    
   return './lib/win32/bin/webpmux.exe';

} else {
    console.log('Unsupported platform:', process.platform, process.arch);
}
};

module.exports = knowos;