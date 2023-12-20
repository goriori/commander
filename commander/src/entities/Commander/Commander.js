import {commands} from "./Commander.option.js";
import {Process} from "../Process/Process.js";
import {APPLICATIONS} from "../../../application.config.js";
import {GlobalProcess} from "../Process/GlobalProcess.js";

export class Commander {
    constructor() {
        this.commands = [...commands]
        this.globalProcess = new GlobalProcess()
    }

    async run(command) {
        const existsCommand = this.commands.map(comm => comm.command).includes(command)
        if (!existsCommand) return false
        const actionCommander = this.commands.find(comm => comm.command === command).handler()
        await this[actionCommander].call(this)
        return true
    }


    async openWorkspace() {

        const process = new Process()
        const output = await process.runProject(APPLICATIONS[1].command, APPLICATIONS[1].path)

        const started_applications = output.toString().trim().split('\n')
        console.log(this.globalProcess.all_process)
        started_applications.forEach(process => this.globalProcess.addStartedProcess(process))

        return true
    }

    async test() {
        console.log('test function ')
        const process = new Process()
        const output = await process.runProject(APPLICATIONS[0].command, APPLICATIONS[0].path)
        return true
    }


    downloadFile() {
        console.log('download File')
    }

    exitProgram() {
        const started_process = this.globalProcess.getStartedProcess()
        console.log(started_process)
        started_process.forEach(process => this.globalProcess.killProcess(process))
        process.exit(0)
    }
}

