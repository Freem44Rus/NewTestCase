const fs = require('fs')
const requestbody = require('./resultRequestBody.json')
//const responsebody = data.response.stream

var Series = requestbody.BusinessData.Contract.Contracts.Contract[0].Header.Series
var Number = requestbody.BusinessData.Contract.Contracts.Contract[0].Header.Number

var jsonformattotest = {
    "Series": Series,
    "Number": Number
}

var filesave = JSON.stringify(jsonformattotest)
var options = { flag : 'a' };
fs.writeFile("results.json", filesave, options , function (error) {
    if (error) {
        console.error(error)
    }
});
