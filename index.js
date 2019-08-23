const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/helloworld',async (req, res) => {
    //console.log('req.headers:', req.headers);
    res.status(200).send("Hello world!");

});

app.listen(8081, () => {
    console.log('express-app started');
});
