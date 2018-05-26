require('dotenv').config();
const express = require('express')
const app = express();
const { json } = require('body-parser');
const cors = require('cors');
const port = 3001;
const massive = require('massive');

const { getHouses,postHouses, deleteHouse } = require('./conroller')

app.use(cors());
app.use(json());

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db',db);
    // app.get('db')
    // .init.createUserTable()
    // .then((response)=>{
    //     console.log('table created');
    // })
})

app.get('/api/getHouses',getHouses)
app.post('/api/sendHouses',postHouses)
app.delete('/api/deleteHouse/:id',deleteHouse)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})