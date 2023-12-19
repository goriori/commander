import {BatCommandBuilder} from './entities/File/Bat/builders/CommandBuilder.js'
import {Bat} from './entities/File/index.js'
import {Process} from "./entities/Process/Process.js";


new Promise((resolve, reject) => {
    const bat_file = new Bat('workspace')
    bat_file.createBat()
    resolve(bat_file)
})
    .then((bat_file) => {
        const bat_command_array = new BatCommandBuilder().generateCommandArray()
        const bat_command = bat_command_array.join('\n')
        bat_file.editBat(bat_command)
        return bat_file
    })
    .then((bat_file) => {
        const process = new Process()
        process.runProcess(bat_file.path_to_file)
        return bat_file
    })
    .then((bat_file) => {
        bat_file.deleteBat()
    })

