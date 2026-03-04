import { Command as CommanderProgram } from 'commander';
import chalk from 'chalk';
import { Command } from './Command';

export class GreetCommand implements Command {
    name = 'greet';
    description = 'Greets the user by name';

    register(program: CommanderProgram): void {
        program
            .command(`${this.name} <name>`)
            .description(this.description)
            .option('-l, --loud', 'Yell the greeting')
            .action((name, options) => this.execute(name, options));
    }

    execute(name: string, options: any): void {
        let message = `Hello, ${name}! Welcome to the CLI.`;
        if (options.loud) {
            message = message.toUpperCase() + '!!!';
            console.log(chalk.bold.green(message));
        } else {
            console.log(chalk.cyan(message));
        }
    }
}
