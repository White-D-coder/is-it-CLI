import { Command as CommanderProgram } from 'commander';
import chalk from 'chalk';
import { Command } from './commands/Command';

export class CLIApp {
    private program: CommanderProgram;
    private commands: Command[] = [];

    constructor(version: string, description: string) {
        this.program = new CommanderProgram();
        this.program
            .name('mycli')
            .description(description)
            .version(version);
    }

    public registerCommand(command: Command): void {
        this.commands.push(command);
        command.register(this.program);
    }

    public start(argv: string[]): void {
        // Fallback if no command is provided
        if (argv.length < 3) {
            console.log(chalk.yellow('Welcome to is-it-CLI! Type "mycli --help" to see all commands.'));
        }

        this.program.parse(argv);
    }
}
