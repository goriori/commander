import {commands} from "./Commander.option.js";
import {Process} from "../Process/Process.js";
import {Readline} from "../Readline/Readline.js";
import {APPLICATIONS} from "../../../application.config.js";

export class Commander {
    constructor() {
        this.commands = [...commands]

    }

    async run(command) {
        const existsCommand = this.commands.map(comm => comm.command).includes(command)
        if (!existsCommand) return false
        const actionCommander = this.commands.find(comm => comm.command === command).handler()
        await this[actionCommander].call()
        return true
    }


    async openWorkspace() {
        const process = new Process()
        await process.runProject(APPLICATIONS[1].command, APPLICATIONS[1].path)
        return true
    }

    async test() {
        console.log('test function ')
        const process = new Process()
        await process.runProject(APPLICATIONS[0].command, APPLICATIONS[0].path)
        return true
    }


    downloadFile() {
        console.log('download File')
    }

    exitProgram() {
        process.exit(0)
    }
}

