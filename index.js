const config = require('config');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const logger = require('./middleware/logger')
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const app = express();


app.use('/api/courses', courses);
app.use('/', home);

// Configuration
console.log(`Application Name: ${config.get('name')}`);
console.log(`Application Name: ${config.get('mail.host')}`);



app.get('/', (req, res) => {
    res.send('hello world!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));