// let fs = require( 'fs' );
// let path = require( 'path' );
import fs from 'fs';
import path from 'path';

const moveFrom = "/home/abc/Desktop/task09/data/";
const imgMov = "/home/abc/Desktop/task09/images/";
const vidMov = "/home/abc/Desktop/task09/video/";
const imgExt = '.jpeg';
const vidExt = '.mp4';

export function moveApi(){

fs.readdir( moveFrom, function( err, files ) {
        if( err ) {
            console.error( "Could not list the directory.", err );
            process.exit( 1 );
        }

       files.forEach(function(file) {
        let fromPath = path.join( moveFrom, file );
        let moveToImg = path.join( imgMov , file );
        let moveToVid = path.join(vidMov, file );
        if(path.extname(file).toLowerCase() === imgExt){
            fs.rename(fromPath, moveToImg, function (err) {
                if (err) throw err
                console.log('Image Successfully moved!')
              })
        }
        else if(path.extname(file).toLowerCase() === vidExt){
            fs.rename(fromPath, moveToVid, function (err) {
                if (err) throw err
                console.log('Video Successfully moved!')
              })
        }
            
         
       });
});
};