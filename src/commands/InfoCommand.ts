import { Command as CommanderProgram } from 'commander';
import chalk from 'chalk';
import { Command } from './Command';

export class InfoCommand implements Command {
    name = 'info';
    description = 'Displays information about this CLI tool';

    register(program: CommanderProgram): void {
        program
            .command(this.name)
            .description(this.description)
            .action(() => this.execute());
    }

    execute(): void {
        console.log(chalk.green('\n===================================='));
        console.log(chalk.bold.yellow('          is-it-CLI Tool          '));
        console.log(chalk.green('====================================\n'));
        console.log(chalk.white('A powerful, OOP-based CLI tool built with TypeScript.'));
        console.log(chalk.white('Features include API integrations, utilities, and more.'));
        console.log(chalk.cyan('Author: A passionate developer!'));
        console.log(chalk.cyan('Built with: Node.js, TypeScript, Commander, Axios, Chalk\n'));
    }
}
