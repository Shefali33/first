let first = () => {
    console.log("my first app")
}
first();

import express from 'express';
const app = express()
app.get('/',(res) => res.send("Hello World"))
app.listen(3000);


import { area } from './server.js';
console.log(`The area of a circle of radius 4 is ${area(4)}`);

import { moveApi } from './task09.js';
moveApi();

// import fs from 'fs';
// fs.appendFile('newtask.txt','ababab',function(){
//     console.log("file created");
// });

// fs.writeFile('newtask.txt','Hello',function(){
//     console.log("hello done");
// });

// fs.appendFile('newtask.txt','ababab',function(){
//     console.log("file modified");
// });

// fs.open('newtask.txt','r',function(){
//     console.log("opened");
// });

// fs.readFile('newtask.txt', 'utf8', function(err, contents) {
//     console.log(contents);
// });

// fs.copyFile('newtask.txt', 'Dest.txt', (err) => {  
//     if (err) throw err;  
//     console.log('SourceFile.txt was copied to DestinationFile.txt');  
// });  

// function copyData(savPath, srcPath) {
//     fs.readFile(srcPath, 'utf8', function (err, data) { //reading contents from src file
//             if (err) throw err;
//             fs.writeFile (savPath, data, function(err) { //writing contents to another file
//                 if (err) throw err;
//                 console.log('Data copied');
//             });
//         });
// }
// copyData('Dest.txt','newtask.txt');

import { addRecord } from './task10.js';
addRecord();

