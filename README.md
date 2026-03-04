# is-it-CLI 🚀

Hey there! Welcome to **is-it-CLI** — a totally custom, fun, and fully functional command-line tool built using Node.js and TypeScript. It's written using clean Object-Oriented Programming (OOP) so the code stays neat and easy to understand.

Whether you want to check some GitHub stats or just need a good programming joke while you code, this little tool has you covered. Everything is kept super simple and easy to use.

---

## 🛠️ How to set it up

Getting this running on your local machine is super straightforward. Just follow these steps:

1. **Grab the code**:
   Clone the repository to your machine.
   ```bash
   git clone <your-repo-link>
   cd is-it-CLI
   ```

2. **Install the packages**:
   Run this so Node can download everything it needs (like Commander and Chalk for the cool colors).
   ```bash
   npm install
   ```

3. **Build the project**:
   Since we're using TypeScript, we need to compile it to JavaScript first.
   ```bash
   npm run build
   ```

4. **Run it!**:
   You can link it to use it globally, or just run it directly with Node:
   ```bash
   npm link
   # OR just do this:
   node dist/index.js <command>
   ```

---

## ✨ What can it do? (Available Commands)

Here are the 10 custom commands you can play around with. 

### Web Stuff (APIs) 🌐

**1. GitHub Profile (`github`)**
Want to see some quick stats for a GitHub user?
- *How to use:* `mycli github <username>`
- *Pro tip:* Add `-d` or `--detailed` if you want to see extra info like their location and blog.
- *Example:* `node dist/index.js github octocat --detailed`

**2. Random Advice/Quote (`quote`)**
Need a quick piece of advice or motivation?
- *How to use:* `mycli quote`
- *Example:* `node dist/index.js quote`

**3. Developer Jokes (`joke`)**
Because debugging is stressful. Have a laugh!
- *How to use:* `mycli joke`
- *Example:* `node dist/index.js joke`

### Local Utilities 🛠️

**4. Say Hi (`greet`)**
A simple greeting to brighten your day.
- *How to use:* `mycli greet <name>`
- *Pro tip:* Use `-l` or `--loud` if you want it to yell.
- *Example:* `node dist/index.js greet Alex --loud`

**5. Check the Time (`time`)**
Prints out your current local date and time nicely.
- *How to use:* `mycli time`
- *Example:* `node dist/index.js time`

**6. Quick Math (`calc`)**
A tiny calculator right in your terminal (`+`, `-`, `*`, `/`).
- *How to use:* `mycli calc <num1> <operator> <num2>`
- *Example:* `node dist/index.js calc 10 + 5`

**7. Copycat (`echo`)**
It just repeats whatever you type.
- *How to use:* `mycli echo <text>`
- *Pro tip:* Add `-r` to reverse the text entirely.
- *Example:* `node dist/index.js echo "hello world" --reverse`

**8. Random Number Generator (`random`)**
Pick a random number between any two values.
- *How to use:* `mycli random <min> <max>`
- *Example:* `node dist/index.js random 1 100`

**9. PC Stats (`sysinfo`)**
Check out your OS, CPU architecture, and how much RAM you have free.
- *How to use:* `mycli sysinfo`
- *Example:* `node dist/index.js sysinfo`

**10. About this tool (`info`)**
Just a quick summary of what this CLI does.
- *How to use:* `mycli info`
- *Example:* `node dist/index.js info`

---

## 🎨 A quick note on the tech
- **Built with TypeScript**: So the code is safe and reliable.
- **Pure OOP Architecture**: Every single command lives in its own cozy little class.
- **Validation**: It won't crash if you accidentally type a letter instead of a number in the calculator.
- **Colorful Output**: Errors show up in red, success in green—it just looks nice!

Have fun using the CLI!