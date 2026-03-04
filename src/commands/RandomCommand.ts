import { Command as CommanderProgram } from 'commander';
import chalk from 'chalk';
import { Command } from './Command';
import { Validator } from '../utils/Validator';

export class RandomCommand implements Command {
    name = 'random';
    description = 'Generates a random number between min and max (inclusive)';

    register(program: CommanderProgram): void {
        program
            .command(`${this.name} <min> <max>`)
            .description(this.description)
            .action((min, max) => this.execute(min, max));
    }

    execute(minStr: string, maxStr: string): void {
        if (!Validator.isNumber(minStr) || !Validator.isNumber(maxStr)) {
            console.error(chalk.red('Error: Both min and max must be valid numbers.'));
            return;
        }

        const min = parseInt(minStr, 10);
        const max = parseInt(maxStr, 10);

        if (min > max) {
            console.error(chalk.red('Error: Min cannot be greater than Max.'));
            return;
        }

        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(chalk.yellow(`Random Number (${min}-${max}): ${chalk.bold.green(result)}`));
    }
}
