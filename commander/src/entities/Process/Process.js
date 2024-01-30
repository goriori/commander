import * as child_process from "child_process";


export class Process {
    constructor() {
        this.child_process = child_process
        this.configuration = {
            TIMEOUT: 20000
        }
    }

    async runProject(command, path) {
        try {
            return await this.child_process.execSync(command, {cwd: path, timeout: this.configuration.TIMEOUT})
        } catch (e) {
            console.log(e)
            return false
        }
    }


}