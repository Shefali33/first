import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/test');
const app = express()
app.use(bodyParser.json())
export function addUser(){
app.post('/user', function (req, res) {
let Schema = mongoose.Schema;
let userSchema = new Schema({
    name : String,
    age : Number,
    DOB : Date,
    isAlive : Boolean
    });

    let User = mongoose.model('User', userSchema);  

    let newUser = new User({
        name : req.body.name,
        age : req.body.age,
        DOB : new Date(req.body.DOB),
        isAlive : req.body.isAD
        });
         
        newUser.save(function (err, data) {
        if (err){
            console.log(err);
            res.send('Error : ', err);
        }
        else {
            console.log('Saved : ', data );
            res.json({"Saved:": data})
        }
          });
    });
    app.listen(3000);
};