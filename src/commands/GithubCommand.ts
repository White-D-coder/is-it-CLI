import { Command as CommanderProgram } from 'commander';
import chalk from 'chalk';
import { Command } from './Command';
import { ApiService } from '../services/ApiService';
import { Validator } from '../utils/Validator';

export class GithubCommand implements Command {
    name = 'github';
    description = 'Fetches GitHub user profile information';
    private apiService: ApiService;

    constructor() {
        this.apiService = new ApiService('https://api.github.com/users/');
    }

    register(program: CommanderProgram): void {
        program
            .command(`${this.name} <username>`)
            .description(this.description)
            .option('-d, --detailed', 'Show detailed user info')
            .action((username, options) => this.execute(username, options));
    }

    async execute(username: string, options: any): Promise<void> {
        if (!Validator.isNotEmpty(username)) {
            console.error(chalk.red('Username cannot be empty!'));
            return;
        }

        try {
            console.log(chalk.blue(`Fetching profile for ${username}...`));
            const data: any = await this.apiService.get(username);

            console.log(chalk.green(`\n=== GitHub Profile: ${data.login} ===`));
            console.log(chalk.white(`Name: ${data.name || 'Not specified'}`));
            console.log(chalk.white(`Bio: ${data.bio || 'Not specified'}`));
            console.log(chalk.white(`Public Repos: ${data.public_repos}`));
            console.log(chalk.white(`Followers: ${data.followers}`));

            if (options.detailed) {
                console.log(chalk.cyan(`\n=== Detailed Info ===`));
                console.log(chalk.white(`Location: ${data.location || 'Unknown'}`));
                console.log(chalk.white(`Company: ${data.company || 'Not specified'}`));
                console.log(chalk.white(`Blog: ${data.blog || 'None'}`));
                console.log(chalk.white(`Profile URL: ${data.html_url}`));
            }
            console.log('\n');

        } catch (error: any) {
            if (error.message.includes('404')) {
                console.error(chalk.red(`User "${username}" not found on GitHub.`));
            } else {
                console.error(chalk.red(`Failed to fetch user data: ${error.message}`));
            }
        }
    }
}
