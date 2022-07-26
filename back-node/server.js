const express = require('express');  
const cors = require('cors');
const app = express();  

const PORT = 3000;

app.use(cors());

const bodyParser = require('body-parser');  
const multipart = require('connect-multiparty');  

const multipartMiddleware = multipart({  
    uploadDir: './subidas'
});

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({  
    extended: true
}));

app.post('/api/subidas', multipartMiddleware, (req, res, next) => {  
    res.json({
        'message': 'File uploaded succesfully.'
    });
});

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))