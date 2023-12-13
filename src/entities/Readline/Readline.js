import readline from "./Readline.js";


export class Readline {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

     question(question) {
        return new Promise((resolve, reject) => this.rl.question(question, resolve))
    }

}


