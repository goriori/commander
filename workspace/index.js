import {BatCommandBuilder} from './entities/File/Bat/builders/CommandBuilder.js'
import {Bat} from './entities/File/index.js'
import {Process} from "./entities/Process/Process.js";

(async function openWorkspace() {
    const bat_command_array = new BatCommandBuilder().generateCommandArray()
    const bat_file = new Bat('workspace')
    await bat_file.createBat()
    await bat_file.editBat(bat_command_array.join('\n'))
    const process = new Process()
    await process.runProcess(bat_file.path_to_file)
})()
