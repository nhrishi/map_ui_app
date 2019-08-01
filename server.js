const invoke = require("./app/invoke-transaction");
const helper = require("./app/helper.js");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./config.js');
const app = express();
const port = 5000;
console.log("=====================>>> We are in server JS !!!!!!!")

app.get("/", (req, res) => {
    res.send({
        message: "Hello There "
    });

});

app.use(bodyParser.json());
app.use(cors());


app.post(`/api/inventoryCapture`, (req, res) => {
    const inputData = JSON.stringify(req.body);
    var peers = ['peer0.novartis.example.com', 'peer0.fisher.example.com'];
    var chaincodeName = 'inventory_cc';
    var channelName = 'mychannel';
    var fcn = 'invoke';
    var args = [];
    args.push("inventoryCollection");
    args.push(JSON.stringify(JSON.parse(inputData).data));
    var username = 'admin';
    var orgname = 'novartis';
    //Register a user 
   // let reg_message = helper.getRegisteredUser(username, orgname, "true");
   // console.log(reg_message);

    let message = invoke.invokeChaincode(peers, channelName, chaincodeName, fcn, args, username, orgname);

    res.send(message);

});

app.listen(port, () => console.log(`Server started on port ${port}`));

