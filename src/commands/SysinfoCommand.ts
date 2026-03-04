import { Command as CommanderProgram } from 'commander';
import chalk from 'chalk';
import os from 'os';
import { Command } from './Command';

export class SysinfoCommand implements Command {
    name = 'sysinfo';
    description = 'Displays basic system and memory information';

    register(program: CommanderProgram): void {
        program
            .command(this.name)
            .description(this.description)
            .action(() => this.execute());
    }

    execute(): void {
        console.log(chalk.cyan('\n💻 System Information:'));
        console.log(chalk.white(`OS Platform: ${os.platform()} (${os.release()})`));
        console.log(chalk.white(`CPU Architecture: ${os.arch()}`));

        const totalMemMB = Math.round(os.totalmem() / 1024 / 1024);
        const freeMemMB = Math.round(os.freemem() / 1024 / 1024);

        console.log(chalk.white(`Total Memory: ${totalMemMB} MB`));
        console.log(chalk.white(`Free Memory: ${freeMemMB} MB\n`));
    }
}
