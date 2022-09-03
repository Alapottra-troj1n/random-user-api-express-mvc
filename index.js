const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/v1/user.route');
const path = require('path');

//global middleware
app.use(cors());
app.use(express.json());



//routes

app.use('/api/v1/user',userRoutes)





app.get('/', async(req, res)=> {
    res.sendFile(path.join(__dirname, '/apihtml.html'));
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