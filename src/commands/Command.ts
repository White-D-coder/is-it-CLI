export interface Command {
    name: string;
    description: string;
    register(program: any): void;
    execute(...args: any[]): Promise<void> | void;
}
