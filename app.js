const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', './src/views');
app.set('view engine', 'ejs');

const newsRouter = require('./src/routes/news');
// Routes
app.use('/', newsRouter)
app.use('/article', newsRouter)

app.listen(PORT, () => console.log(`server is runnig on PORT ${PORT}`));