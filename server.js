var express = require('express');
var app = express();
var port = process.env.port || 3000;
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://admin:admin@cluster0.loh9vra.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
let dbCollection;

app.use(express.static('mental', {index: 'home.html'}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function dbConnection(collectionName) {
    client.connect(err => {
        dbCollection = client.db().collection(collectionName);
        if (!err) {
            console.log('DB Connected');
            console.log(dbCollection);
        } else {
            console.log(err);
        }
    });
}

function getAllInfo(callback) {
    dbCollection.find().toArray(callback);
}

app.get('/api/info',(req,res) => {
    getAllInfo((error, result) => {
        if (error) {
            res.json({statusCode:400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Successfully'});
        }
    });
    //res.json({statusCode: 200, data:, message:"Success"})
});

app.post('/api/info', (req, res) => {
    let info = req.body;
    insert(info, (err, result) => {
        if (err) {
            res.json({statusCode:400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Info successfully added'});
        }
    });
});



app.listen(port,()=>{
    console.log('App listening to: ' + port);
    dbConnection('Info');
});