import {BatCommandBuilder} from './entities/File/Bat/builders/CommandBuilder.js'
import {Bat} from './entities/File/index.js'
import {Process} from "./entities/Process/Process.js";
import {Json} from "./entities/File/JSON/Json.js";
import {applicationsParser} from "./utils/parsers/application.parser.js";

(() => {
    return new Promise((resolve, reject) => {
        const bat_file = new Bat('workspace')
        bat_file.createBat()
        const bat_command_array = new BatCommandBuilder().generateCommandArray()
        const bat_command = bat_command_array.join('\n')
        bat_file.editBat(bat_command)

        return resolve({bat_file, bat_command_array})
    })
        .then(({bat_file, bat_command_array}) => {
            const applications_run = new Set(applicationsParser(bat_command_array))
            const application_to_json = new Json('application_run')
            application_to_json.createJSON()
            application_to_json.editJSON([...applications_run])

            return {bat_file, application_to_json}
        })
        .then(({bat_file, application_to_json}) => {
            const process = new Process()
            process.runProcess(bat_file.path_to_file)
            return {bat_file, application_to_json}
        })


})()


