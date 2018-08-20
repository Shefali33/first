import express from 'express';
import bodyParser from 'body-parser';
import { readFile, appendFile } from 'fs';
const app = express()
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));

export function addRecord(){
    app.post('/post1', function (req, res) {
        let data = req.body.v1;
        let data1 =req.body.v2;
            readFile('newtask1.txt', 'utf8', function(err, contents){
            if (err){
                appendFile('newtask1.txt',data,function(){
                    console.log("File created and record added");
                })
            }
            else{
                let value = contents.split(/[\n\r]+/g);
                let value1 = data1.split(',');
                let newArray = value.map(element => element.split(',')[1])  
                    if(newArray.includes(value1[1])){
                        console.log("Username alredy taken...");
                        res.send("Username alredy taken...")
                    }
                    else{
                        appendFile('newtask1.txt',`\n\r${data1}`,function(){
                            console.log("Data added...");
                            res.send("Data added...")
                        })
                    }
                }
            });
        });
    app.listen(4000);
};



  