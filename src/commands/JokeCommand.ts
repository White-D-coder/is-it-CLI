import { Command as CommanderProgram } from 'commander';
import chalk from 'chalk';
import { Command } from './Command';
import { ApiService } from '../services/ApiService';

export class JokeCommand implements Command {
    name = 'joke';
    description = 'Fetches a random programming joke';
    private apiService: ApiService;

    constructor() {
        this.apiService = new ApiService();
    }

    register(program: CommanderProgram): void {
        program
            .command(this.name)
            .description(this.description)
            .action(() => this.execute());
    }

    async execute(): Promise<void> {
        try {
            console.log(chalk.cyan('Fetching a joke to code better...'));
            const data: any = await this.apiService.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single');

            if (data.type === 'single') {
                console.log(chalk.green(`\n${data.joke}\n`));
            } else {
                console.log(chalk.green(`\n${data.setup}`));
                setTimeout(() => {
                    console.log(chalk.yellow(`${data.delivery}\n`));
                }, 2000);
            }
        } catch (error: any) {
            console.error(chalk.red(`Failed to fetch joke: ${error.message}`));
        }
    }
}
