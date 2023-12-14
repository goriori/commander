import {Bat} from "../File/index.js";
import {BatCommandBuilder} from "./builders/CommandBuilder.js";
import {commands} from "./Commander.option.js";
import {Process} from "../Process/Process.js";
import {Readline} from "../Readline/Readline.js";
import applications from "../../configs/application.config.js";
import {ENTITIES} from "../../settings/index.js";

// TODO: Если выходных файлов не существует - приложение падает, и спустя время файлы создаются.
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


    openWorkspace() {
        const bat_command_array = new BatCommandBuilder().generateCommandArray()
        const bat_file = new Bat('workspace')
        bat_file.createBat()
        bat_file.editBat(bat_command_array.join('\n'))
        const process = new Process()
        process.runProcess(bat_file.path_to_file)
    }

    async openName() {

        const rl = new Readline()
        const name = await rl.question('Введите имя приложения или страницы: ')
        const existName = applications.find(app => app.name === name)
        if (!existName) return false
        let command = ''
        if (existName.entity === ENTITIES[0]) command += new BatCommandBuilder().createCommandBrowser(command, existName)
        else if (existName.entity === ENTITIES[1]) command += new BatCommandBuilder().createCommandApplication(command, existName)
        const bat_file = new Bat('open-name')
        bat_file.createBat()
        bat_file.editBat(command)
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

