const {name, sum: add, multiplication} = require('./index');
const os = require("os");
const chalk = require("chalk")

console.log(name);
console.log(add(10,20));
console.log(multiplication(2,4));
console.log(os.networkInterfaces());
const log = console.log;
log(chalk.blue('Hello') + ' ' + chalk.yellow('ReactJs!'));
