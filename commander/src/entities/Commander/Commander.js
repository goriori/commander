import {commands} from "./Commander.option.js";
import {Process} from "../Process/Process.js";
import {Readline} from "../Readline/Readline.js";
import {APPLICATION} from "../../settings/application.setting.js";

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
        const process = new Process()
        await process.runProject(APPLICATION[1].command, APPLICATION[1].path)
    }

    // async openName() {
    //
    //     const rl = new Readline()
    //     const name = await rl.question('Введите имя приложения или страницы: ')
    //
    //     const existName = workspace.find(app => app.name === name)
    //     if (!existName) return false
    //
    //     let command = ''
    //     const builder_entity = {
    //         [ENTITIES[0]]: () => command += new BatCommandBuilder().createCommandBrowser(command, existName),
    //         [ENTITIES[1]]: () => command += new BatCommandBuilder().createCommandApplication(command, existName)
    //     }
    //     builder_entity[existName.entity].call()
    //
    //     const bat_file = new Bat('open-name')
    //     bat_file.createBat()
    //     bat_file.editBat(command)
    //
    //     const process = new Process()
    //     await process.runProcess(bat_file.path_to_file)
    //
    // }

    async test() {
        const process = new Process()
        await process.runProject(APPLICATION[0].command, APPLICATION[0].path)
    }

    downloadFile() {
        console.log('download File')
    }

    exitProgram() {
        process.exit(0)
    }
}

