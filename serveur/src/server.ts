import express, { Application, Request, Response } from 'express';

const app: Application = express();
app.use('/', (req, res) => {
    console.log(req);
    res.status(200).send('Hello World');;

})

const port: number = 3000
app.listen(port, () => {
    console.log('serveur en cours d`éxécution');

});