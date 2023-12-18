import * as child_process from "child_process";


export class Process {
    constructor() {
        this.process = child_process
    }

    async runProcess(path) {
        this.process.exec(path, (err, stdout, stdin) => {
            if (err) return err
            console.log(stdout)
            console.log(stdin)
        })
        return true
    }
}