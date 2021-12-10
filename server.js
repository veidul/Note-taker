const express = require('express')
const app = express();
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
var PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, function(){
    console.log("Application listening on PORT: " + PORT)
});