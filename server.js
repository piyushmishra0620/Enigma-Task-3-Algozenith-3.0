const app = require('express');
const server = app();
const cors = require('cors');
const md5 = require('md5');
require('dotenv').config();
const private_key_1 = process.env.PRIVATE_KEY_1;
const private_key_2 = process.env.PRIVATE_KEY_2;
const private_key_3 = process.env.PRIVATE_KEY_3;
const port = process.env.PORT || 3000;
server.use(cors());
server.use(app.json());
var public_api_key_1 = '25270e8a7fa745900ecb3311233bb2dd';
var public_api_key_2='2d33711408eb7c8bf7bdf21592721537';
var public_api_key_3='cfc9f667f754212fb83dd3a351dd76c9';
server.get('/api_keys', (req, res) => {
    try {
        const ts1 = Date.now().toString();
        const ts2 = Date.now().toString();
        const ts3 = Date.now().toString();
        const hash1 = md5(ts1 + private_key_1 + public_api_key_1);
        const hash2 = md5(ts2 + private_key_2 + public_api_key_2);
        const hash3 = md5(ts3 + private_key_3 + public_api_key_3);
        res.status(200).json({ ts1: ts1, hash1: hash1,ts2: ts2, hash2:hash2, ts3:ts3, hash3:hash3 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error retrieving details..." });
    }
});
server.listen((port), () => {
    console.log(`server running at http://localhost:${port}`);
});