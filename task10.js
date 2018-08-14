import { readFile, appendFile } from 'fs';
let data = "1.,Shef33,abcd,she@gmail,shefali,B.E";
let data1 = "2.,Indu17,abcd,indu@gmail,Indu,D.Pharma";
// let data1 ="2,Shef33,abcd,indu@gmail,Indu,D.Pharma\n\r"
export function addRecord(){
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
            }
            else{
                appendFile('newtask1.txt',`\n\r${data1}`,function(){
                    console.log("Data added...");
                })
            }
        }
    });
};



  