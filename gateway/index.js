const express = require('express');
const cors = require('cors')
const proxy = require('express-http-proxy')
const app = express();

app.use(express.json());

app.use('/user', proxy('http://localhost:8001'))
app.use('/quotes', proxy('http://localhost:8002'))


app.listen(8000, () => {
    console.log("gateway is listening on port 8000")
})