// import chalk from "chalk";
// console.log(chalk.blue("Hello world!"));

// const log = console.log;

// log(chalk.blue.bgRed.bold("Hello world!"));
// log(
//   chalk.green(
//     "I am a green line " +
//       chalk.blue.underline.bold("with a blue substring") +
//       " that becomes green again!"
//   )
// );
// import path from "path";

// console.log(path.join("home/internal_packages/", "index.js"));

// import { program } from "commander";

// program.option("--first").option("-s, --separator <char>");

// program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));

import { Command } from "commander";
import fs from "fs";
const program = new Command();

program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");

// program
//   .command("split")
//   .description("Split a string into substrings and display as an array")
//   .argument("<string>", "string to split")
//   .option("--first", "display just the first substring")
//   .option("-s, --separator <char>", "separator character", ",")
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

// program.parse();

program
  .command("count")
  .description("Counts the number of words in a file")
  .argument("<file>")
  .action((path, options) => {
    countWords(path);
  });

program
  .command("countCharacters")
  .description("Counts the number of characters in a file")
  .argument("<file>")
  .action((path, options) => {
    countCharacters(path);
  });

program.parse();

function countWords(path) {
  fs.readFile(path, "utf-8", function (err, data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === " ") count++;
    }
    console.log(`This file has ${count} number of words`);
    return count;
  });
}

function countCharacters(path) {
  fs.readFile(path, "utf-8", function (err, data) {
    if (!err) {
      let arr = data.split("");
      let count = arr.length;
      console.log(`There are ${count} characters in this file`);
    }
  });
}
