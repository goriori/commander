import {ENTITIES} from "../../settings/index.js";
import {Bat} from "../File/index.js";
import {BatCommandBuilder} from "./builders/CommandBuilder.js";
import applicationConfig from "../../configs/application.config.js";
import commandsConfig from "./Commander.option.js";
import child_process from "child_process";


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
        child_process.exec(bat_file.path_to_file, (error, stdout, stderr) => {
            if (error) return console.log(error)
            console.log(stdout, stderr)
        })
    }

    test() {
        console.log('this test command ')
    }

    downloadFile() {
        console.log('download File')
    }

    exitProgram() {
        process.exit(0)
    }
}

