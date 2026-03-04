import { Command as CommanderProgram } from 'commander';
import chalk from 'chalk';
import { Command } from './Command';

export class TimeCommand implements Command {
    name = 'time';
    description = 'Displays current local time beautifully';

    register(program: CommanderProgram): void {
        program
            .command(this.name)
            .description(this.description)
            .action(() => this.execute());
    }

    execute(): void {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const dateString = now.toLocaleDateString();

        console.log(chalk.blue(`\n🕒 Current Date & Time:`));
        console.log(chalk.white(`Date: ${chalk.bold(dateString)}`));
        console.log(chalk.white(`Time: ${chalk.bold(timeString)}\n`));
    }
}
