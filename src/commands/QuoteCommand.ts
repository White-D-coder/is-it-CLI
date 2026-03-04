import { Command as CommanderProgram } from 'commander';
import chalk from 'chalk';
import { Command } from './Command';
import { ApiService } from '../services/ApiService';

export class QuoteCommand implements Command {
    name = 'quote';
    description = 'Fetches a random inspirational quote';
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
            console.log(chalk.blue('Fetching a random quote for you...'));
            const data: any = await this.apiService.get('https://api.adviceslip.com/advice');
            console.log(chalk.green(`\n"${data.slip.advice}"\n`));
        } catch (error: any) {
            console.error(chalk.red(`Failed to fetch quote: ${error.message}`));
            console.log(chalk.yellow('Note: The API might be temporarily down or rate-limited.'));
        }
    }
}
