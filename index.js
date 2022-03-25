const fs = require('fs');

if(fs.existsSync('./MyFunnyFolder')) {
  fs.rmdirSync('./MyFunnyFolder');
  console.log('Folder removed');
} else {
  fs.mkdirSync('./MyFunnyFolder');
  console.log('Folder created');
}

if(!fs.existsSync('./What/isThis.txt')) {
  fs.mkdirSync('./What');
}

if(fs.existsSync('./What')) {
  fs.openSync('./What/isThis.txt', 'w+');
}