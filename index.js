const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const userRoutes = require('./routes/v1/user.route');

//global middleware
app.use(cors());
app.use(express.json());



//routes

app.use('/api/v1/user',userRoutes)





app.get('/', async(req, res)=> {
    res.json({application: 'random user api'})
})

app.all("*", (req, res) => {
    res.json({ message: 'router not found' })
})

app.listen(port, () => {
    console.log('listening to the port: ' + port)
})

process.on('unhandledRejection', (err) => {
    app.close(() => {
        process.exit(1);
    });
});