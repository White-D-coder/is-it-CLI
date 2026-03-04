import { Command as CommanderProgram } from 'commander';
import chalk from 'chalk';
import { Command } from './Command';
import { Validator } from '../utils/Validator';

export class CalcCommand implements Command {
    name = 'calc';
    description = 'Performs basic math operations (+, -, *, /)';

    register(program: CommanderProgram): void {
        program
            .command(`${this.name} <num1> <op> <num2>`)
            .description(this.description)
            .action((num1, op, num2) => this.execute(num1, op, num2));
    }

    execute(num1: string, op: string, num2: string): void {
        if (!Validator.isNumber(num1) || !Validator.isNumber(num2)) {
            console.error(chalk.red('Error: Both arguments must be valid numbers.'));
            return;
        }

        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        let result: number;

        switch (op) {
            case '+': result = n1 + n2; break;
            case '-': result = n1 - n2; break;
            case '*': result = n1 * n2; break;
            case '/':
                if (n2 === 0) {
                    console.error(chalk.red('Error: Cannot divide by zero.'));
                    return;
                }
                result = n1 / n2;
                break;
            default:
                console.error(chalk.red('Error: Invalid operator. Supported operators are +, -, *, /'));
                return;
        }

        console.log(chalk.green(`Result: ${n1} ${op} ${n2} = ${chalk.bold(result)}`));
    }
}
