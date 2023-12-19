import * as child_process from "child_process";


export class Process {
    constructor() {
        this.process = child_process
    }

    async runProject(command, path) {
        try {
            await this.process.execSync(command, {cwd: path})
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }


}