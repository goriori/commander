import * as child_process from "child_process";


export class Process {
    constructor() {
        this.process = child_process
    }

    async runProcess(path) {
        this.process.execSync(path)
    }

    async runProject(command, path) {
        this.process.execSync(command, {cwd: path})
    }
}