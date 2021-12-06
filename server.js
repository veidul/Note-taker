const express = require('express')
const app = express();
var PORT = process.env.port || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function(){
    console.log("Application listening on PORT: " + PORT)
});