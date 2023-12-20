import * as child_process from "child_process";

const process = []

export class Process {
    constructor() {
        this.process = child_process
    }

    async runProcess(path) {
        const new_process = this.process.execSync(path)
        process.push(new_process.toString())
    }

}