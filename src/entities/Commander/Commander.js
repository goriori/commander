import {Bat} from "../File/index.js";
import {commands} from "./Commander.option.js";
import {Process} from "../Process/Process.js";
import {Readline} from "../Readline/Readline.js";
import {ENTITIES} from "../../settings/index.js";
import {BatCommandBuilder} from "./builders/CommandBuilder.js";
import applications from "../../configs/application.config.js";

export class Commander {
    constructor() {
        this.commands = [...commands]

    }

    async run(command) {
        const existsCommand = this.commands.map(comm => comm.command).includes(command)
        if (!existsCommand) return false
        const actionCommander = this.commands.find(comm => comm.command === command).handler()
        return await this[actionCommander].call()
    }


    async openWorkspace() {
        const bat_command_array = new BatCommandBuilder().generateCommandArray()
        const bat_file = new Bat('workspace')
        await bat_file.createBat()
        await bat_file.editBat(bat_command_array.join('\n'))
        const process = new Process()
        await process.runProcess(bat_file.path_to_file)
    }

    async openName() {

        const rl = new Readline()
        const name = await rl.question('Введите имя приложения или страницы: ')

        const existName = applications.find(app => app.name === name)
        if (!existName) return false

        let command = ''
        const builder_entity = {
            [ENTITIES[0]]: () => command += new BatCommandBuilder().createCommandBrowser(command, existName),
            [ENTITIES[1]]: () => command += new BatCommandBuilder().createCommandApplication(command, existName)
        }
        builder_entity[existName.entity].call()

        const bat_file = new Bat('open-name')
        bat_file.createBat()
        bat_file.editBat(command)

        const process = new Process()
        await process.runProcess(bat_file.path_to_file)

    }

    async test() {
        const process = new Process()
        await process.runProcess("node C:/goriori/plugins/folder-parser/index.js")
        console.log('this test command ')
    }

    downloadFile() {
        console.log('download File')
    }

    exitProgram() {
        process.exit(0)
    }
}

