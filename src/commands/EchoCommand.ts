import { Command as CommanderProgram } from 'commander';
import chalk from 'chalk';
import { Command } from './Command';

export class EchoCommand implements Command {
    name = 'echo';
    description = 'Prints the given text back to you';

    register(program: CommanderProgram): void {
        program
            .command(`${this.name} <text>`)
            .description(this.description)
            .option('-r, --reverse', 'Reverse the text')
            .action((text, options) => this.execute(text, options));
    }

    execute(text: string, options: any): void {
        let output = text;
        if (options.reverse) {
            output = text.split('').reverse().join('');
        }
        console.log(chalk.magenta(output));
    }
}
