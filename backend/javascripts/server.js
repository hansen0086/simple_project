var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');


var db = new sqlite3.Database(__dirname+'/../db/food.db');

app.use(express.static(__dirname + '../../frontend/javascripts'))

//route
app.get('/',function(request,response){
    response.send('root request');
})

app.get('/food',function(request, response){  
    db.all('select * from food', function(err,rows){
        if(err){
            console.log("Error: "+ err);
        }
        else{
            response.send(rows);
        }
    })
})

app.post('/food', function(request, response){
    console.log('POST request received at /food')
})




app.listen(8000,function(){
    console.log("Server is running on port 8000");

});