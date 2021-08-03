const newman = require('newman'); // require newman in your project
const chalk = require('chalk')
const fs = require('fs')
const moment = require('moment')


// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./PCG-64394.postman_collection.json'),
    environment: require('./TST01.json'),
    reporters: 'cli'
}).on('beforeRequest', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    if (data.request.body) {
        const requestbody = data.request.body.raw
        const json = JSON.parse(requestbody)
        var Series = json.BusinessData.Contract.Contracts.Contract[0].Header.Series
        var Number = json.BusinessData.Contract.Contracts.Contract[0].Header.Number
        var jsonformattotest = [{
            "Series": Series,
            "Number": Number,
            "Time": moment().add(3, 'Hours')
        }]
        let filesave = JSON.stringify(jsonformattotest)
        var options = { flag: 'a' };
        fs.writeFileSync("results.json", filesave, options, function (error) {
            if (error) {
                console.error(error)
            }
        });
    }
})