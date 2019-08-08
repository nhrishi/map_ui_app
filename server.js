const invoke = require("./app/invoke-transaction");
const query = require("./app/query");
const helper = require("./app/helper.js");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./config.js');
const app = express();
const port = 5000;
JSONStream = require('JSONStream')
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

app.post(`/api/mapCapture`, (req, res) => {
    const inputData = JSON.stringify(req.body);
    var peers = ['peer0.novartis.example.com'];
    var chaincodeName = 'map_lifecycle_cc';
    var channelName = 'mychannel';
    var fcn = 'invoke';
    //var collection = 'inventoryCollection';
    var args = [];
    args.push("newMAPRequest");
    args.push("mapCollection");
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

    query.queryChaincode(peer, channelName, chaincodeName, args, fcn, username, orgname).then(result => {
       
        console.log("result:", result.toString('utf8'));
        jsonData = JSON.parse(result);
        //console.log("records:", JSON.parse(result).records[0]);
        for (var i = 0; i < jsonData.records.length; i++) {
            var obj = jsonData.records[i];
            console.log("Object::", obj);
        }

        // var resultData = JSON.parse(result.toString('utf8'));
        // if (resultData.constructor === Array) {
        //     resultData = resultData.map(function (item, index) {
        //         if (item.data) {
        //             console.log("Item Data::",item.data);
        //         } else {
        //             console.log("item::" , item);
        //         }
        //     })
        // }

        // var jsonData = JSONStream.parse(['rows', /./, 'doc']);
        // console.log("JSONStream::", jsonData.Key)

        // let data = Buffer.from(result.toString('ascii'), 'ascii');
        // console.log("data0::", data);

        // data = encodeURI(data.toString('utf8')).replace(/%00/g,"");
        // console.log("data1::", data);

        // data = JSON.parse(data);
        // console.log("data2::", data);

        // jsonData = JSON.parse(result);
        //const buf = Buffer.from(result);
        //jsonData = JSON.parse(buf.toString());
        // console.log("jsonData:", jsonData);

        // for (var key in jsonData) {
        //     console.log("Key::", key);
        // }

        //jsonData = JSON.parse(JSON.stringify(result));
        //console.log("JSON DATA", JSON.parse(result.toString())); 
        //console.log(Object.keys(jsonData));
        //console.log(Object.values(jsonData));
        //     outVal = result.toString();
        //  for ( var i = 0; i < jsonData.length; i++) {
        //      var obj = jsonData[i];
        //      console.log(obj);
        // }
        // jsonData = JSON.parse(result);
        // for (var obj in jsonData) {
        //     if (jsonData.hasOwnProperty(obj)) {
        //         for (var prop in jsonData[obj]) {
        //             console.log("test11::", prop);
        //             if (jsonData[obj].hasOwnProperty(prop)) {
        //                 console.log(prop + ':' + jsonData[obj][prop]);
        //             }
        //         }
        //     }
        // }

        res.send(jsonData.records);

    });
    //let message = invoke.queryChaincode(peers, channelName, chaincodeName, fcn, args, username, orgname);
    //data = result[0];
    //console.log("checking data..", data);
    //res.send(result[0].data);

});

app.listen(port, () => console.log(`Server started on port ${port}`));

