import {Bat} from "../File/index.js";
import {BatCommandBuilder} from "./builders/CommandBuilder.js";
import commandsConfig from "./Commander.option.js";
import {Process} from "../Process/Process.js";


export class Commander {
    constructor() {
        this.commands = [...commandsConfig]

    }

    run(command) {
        const existsCommand = this.commands.map(comm => comm.command).includes(command)
        if (!existsCommand) return false
        const actionCommander = this.commands.find(comm => comm.command === command).handler()
        return this[actionCommander].call()
    }


    openWorkspace() {
        const bat_command_array = new BatCommandBuilder().generateCommandArray()
        const bat_file = new Bat('workspace')
        bat_file.createBat()
        bat_file.editBat(bat_command_array.join('\n'))
        const process = new Process()
        process.runProcess(bat_file.path_to_file)
    }

    test() {
        const process = new Process()
        process.runProcess("node C:/goriori/plugins/folder-parser/index.js")
        console.log('this test command ')
    }

    downloadFile() {
        console.log('download File')
    }

    exitProgram() {
        process.exit(0)
    }
}

