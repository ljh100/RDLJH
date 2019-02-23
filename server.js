const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers',(req,res)=>{
    
    //res.send({message: 'Helllo '});
    res.send(

        [{
            "id": 1,
            "image": "http://placeimg.com/64/64/1",
            "name": "이준희11s",
            "birthday": "19601015",
            "address": "99934d.. thornhill wood"
        }, {
            "id": 2,
            "image": "http://placeimg.com/64/64/2",
            "name": "이준희22s",
            "birthday": "19601015",
            "address": "22234d.. thornhill wood"
        }, {
            "id": 3,
            "image": "http://placeimg.com/64/64/3",
            "name": "이준희44s",
            "birthday": "19601015",
            "address": "9994d.. thornhill wood"
        }, {
            "id": 4,
            "image": "http://placeimg.com/64/64/3",
            "name": "이준희33s",
            "birthday": "19601015",
            "address": "4545d.. thornhill wood"
        }]
    );
});

app.listen(port,()=> console.log(`Listing on port ${port}`));
