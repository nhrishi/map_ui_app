const invoke = require("./app/invoke-transaction");
const query = require("./app/query");
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
    var peers = ['peer0.novartis.example.com'];
    var chaincodeName = 'inventory_cc';
    var channelName = 'mychannel';
    var fcn = 'invoke';
    //var collection = 'inventoryCollection';
    var args = [];
    args.push("addInventory");
    args.push("inventoryCollection");
    args.push(JSON.stringify(JSON.parse(inputData).data));
    var username = 'admin';
    var orgname = 'novartis';
    //Register a user 
    let reg_message = helper.getRegisteredUser(username, orgname, "true");
    console.log(reg_message);

    let message = invoke.invokeChaincode(peers, channelName, chaincodeName, fcn, args, username, orgname);

    res.send(message);

});


app.post(`/api/inventoryDashboard`, (req, res) => {
    const inputData = JSON.stringify(req.body);
    var peer = 'peer0.novartis.example.com';
    var chaincodeName = 'inventory_cc';
    var channelName = 'mychannel';
    var fcn = 'query';
    //var queryString = {"objectType":"ASSET", "activeInd":"A"};
    //var collection = 'inventoryCollection';
    var args = [];
    args.push("getAssetsByFilter");
    args.push("inventoryCollection");
    //args.push(JSON.stringify(JSON.parse(inputData)));
    args.push(JSON.parse(inputData).newValue);
    var username = 'admin';
    var orgname = 'novartis';
    //Register a user 
    let reg_message = helper.getRegisteredUser(username, orgname, "true");
    console.log(reg_message);

    query.queryChaincode(peer, channelName, chaincodeName, args, fcn, username, orgname).then(result=>{
        console.log("Result::", JSON.stringify(result));
        //let data = JSON.stringify(result);
        //console.log("data...>", data);
       // let json_data = JSON.parse(result);
        //console.log("data...>>", json_data);
        // for (var i=0; i < json_data.query_result.length; i++ ){
        //     var record = json_data.query_result[i];
        //     console.log("Records::" ,record);
        // }

         for (var key in JSON.parse(result)) {
             //var record = json_data.query_result;
             console.log("Record::", result[key]); 
         }

        res.send(result);

    });
    //let message = invoke.queryChaincode(peers, channelName, chaincodeName, fcn, args, username, orgname);
    //data = result[0];
    //console.log("checking data..", data);
    //res.send(result[0].data);

});

app.listen(port, () => console.log(`Server started on port ${port}`));

