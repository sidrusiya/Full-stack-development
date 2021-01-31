const express=require('express');

const http=require('http');

const hostname="localhost";
const morgan=require('morgan');

const bodyParser=require('body-Parser');

const port='3000';

const app=express();

app.use(morgan('dev'));
app.use(bodyParser.json());

const dishRouter = require('./routes/dishRouter');

app.use('/dishes', dishRouter);

const promoRouter = require('./routes/promoRouter');

app.use('/promotions', promoRouter);

const leaderRouter = require('./routes/leaderRouter');

app.use('/leaders', leaderRouter);

app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('ContentType','text/html');
    res.end('<html><body><h1>Hi Sid!</h1></body></html>');
});

const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Serving running at http://${hostname}:${port}`);
});