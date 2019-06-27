var path   = require('path');

var knowos=function()
{
if (process.platform === 'darwin') {

    return  path.join(__dirname, '/lib/osx/bin/webpmux');

}else if (process.platform === 'linux') {

   return  path.join(__dirname, '/lib/linux/bin/webpmux');

}else if (process.platform === 'win32') {
    
   return  path.join(__dirname, '/lib/win32/bin/webpmux.exe');

} else {
    console.log('Unsupported platform:', process.platform, process.arch);
}
};

module.exports = knowos;