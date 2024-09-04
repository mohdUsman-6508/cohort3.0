import { Command } from "commander";

const program = new Command();

program.name("my-cli-tool").description("A simple CLI tool").version("1.0.0");

program
  .command("greet <name>")
  .description("Greet a person by name")
  .action(function (name) {
    console.log(`Hello, ${name}!`);
  });

program.parse(process.argv);
