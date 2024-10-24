import express, { Application, Request, Response } from 'express';
import recettesRoutes from './routes/recettes/index'
import userRoutes from './routes/user/index'

const app: Application = express();

app.use('/api', recettesRoutes);
app.use('/api', userRoutes);
app.use('/', (req, res) => {
    console.log('request');
    res.status(200).send('Hello World');

})

const port: number = 3000
app.listen(port, () => {
    console.log('serveur en cours d`éxécution');

});