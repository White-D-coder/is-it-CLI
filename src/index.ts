import { CLIApp } from './CLIApp';
import { GithubCommand } from './commands/GithubCommand';
import { QuoteCommand } from './commands/QuoteCommand';
import { JokeCommand } from './commands/JokeCommand';
import { GreetCommand } from './commands/GreetCommand';
import { TimeCommand } from './commands/TimeCommand';
import { CalcCommand } from './commands/CalcCommand';
import { EchoCommand } from './commands/EchoCommand';
import { RandomCommand } from './commands/RandomCommand';
import { SysinfoCommand } from './commands/SysinfoCommand';
import { InfoCommand } from './commands/InfoCommand';

// Initialize the main application
const app = new CLIApp('1.0.0', 'A highly functional, OOP-based custom CLI tool.');

// Registering all 10 custom commands
app.registerCommand(new GithubCommand());
app.registerCommand(new QuoteCommand());
app.registerCommand(new JokeCommand());
app.registerCommand(new GreetCommand());
app.registerCommand(new TimeCommand());
app.registerCommand(new CalcCommand());
app.registerCommand(new EchoCommand());
app.registerCommand(new RandomCommand());
app.registerCommand(new SysinfoCommand());
app.registerCommand(new InfoCommand());

// Start the app with arguments
app.start(process.argv);
