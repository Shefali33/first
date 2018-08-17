import express from 'express';
import bodyParser from 'body-parser';
import { readFile, appendFile ,writeFile } from 'fs';
const app = express()
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));

export function updateRecord(){
    app.put('/post1/:id', function (req, res) {
        let {id} = req.params;
        let data1 = req.body.v1.split(',');
        let data = req.body.v2;
        // let data1 =req.body.v2;
            readFile('newtask1.txt', 'utf8', function(err, contents){
            if (err){
                appendFile('newtask1.txt',data,function(){
                    console.log("File created and record added");
                })
            }
            else{
                let value = contents.split(/[\n\r]+/g);
                let newArr;
                // value.forEach(function(element){
                //     newArr = element.split(',')
                //   if(newArr[0] == id){
                //       newArr[1] = data1[1];
                //       value.splice(0,1,`${newArr}\n\r`);
                //   }
                //   console.log(value);
                //   writeFile('newtask1.txt',`${value}`,function(err){
                //             if (err) throw err;
                //             res.end("Username Updated...")
                //         })
                // })
                for(let i=0;i<value.length;i++){
                    newArr = value[i].split(',');
                        if(id == newArr[0]){
                        newArr[1] = data1[1];
                        value.splice(i,1,`${newArr}\n\r`);
                        }   
                    }
                    console.log(value);
                    writeFile('newtask1.txt',`${value}`,function(err){
                        if (err) throw err;
                        res.send("Username Updated...")
                    })
                }  
            })
        });
    }
    app.listen(4000);



  