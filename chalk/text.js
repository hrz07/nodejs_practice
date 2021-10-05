const chalk = require('chalk');

let text = "Hi there, i'm Hridoy. And this texts color will be red." 
console.log(chalk.red(text));

let text2 = "Hi there, i'm Hridoy. This texts color will be red and background will be white." 
console.log(chalk.bgWhite.red(text2));

let text3 = "Hi there, i'm Hridoy. This texts color will be red, background will be green and also bold." 
console.log(chalk.bgGreen.red.bold(text3));