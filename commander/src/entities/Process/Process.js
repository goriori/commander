import * as child_process from "child_process";


export class Process {
    constructor() {
        this.process = child_process
    }

    async runProject(command, path) {
        try {
            const new_process = await this.process.execSync(command, {cwd: path})
            return new_process
        } catch (e) {
            console.log(e)
            return false
        }
    }


}