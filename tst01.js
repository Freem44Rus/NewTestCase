const newman = require('newman'); // require newman in your project
const chalk = require('chalk')

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./KASKO.json'),
    environment: require('./TST01.json'),
    reporters: 'cli'
}, function (err) {
	if (err) { throw err; }
    console.log(chalk.green('Collection run complete!'));
});