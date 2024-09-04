import { Command } from "commander";

const program = new Command();

program
  .name("Calc-CLI")
  .description("A simple calculator cli")
  .version("1.0.0");

program
  .command("add <a> <b>")
  .description("add two numbers")
  .action(function (a, b) {
    const result = parseInt(a) + parseInt(b);
    console.log(`The sum of ${a} and ${b} is ${result}`);
  });

program
  .command("sub <a> <b>")
  .description("subtract two numbers")
  .action(function (a, b) {
    const result = parseInt(a) - parseInt(b);
    console.log(`The subtractoin of ${a} and ${b} is ${result}`);
  });

program
  .command("mul <a> <b>")
  .description("multiply two numbers")
  .action(function (a, b) {
    const result = parseInt(a) * parseInt(b);
    console.log(`The multiplication of ${a} and ${b} numbers are ${result}`);
  });

program
  .command("div <a> <b>")
  .description("divide two numbers")
  .action(function (a, b) {
    if (parseInt(b) === 0) {
      console.log("not define");
      return;
    } else {
      const result = parseFloat(a) / parseFloat(b);
      console.log(`The division of ${a} and ${b} is ${result}`);
    }
  });

program.parse(process.argv);
