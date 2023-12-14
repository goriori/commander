import {ENTITIES} from "../../../settings/index.js";
import applicationConfig from "../../../configs/application.config.js";

export class BatCommandBuilder {
    constructor() {
    }

    #buildCommand(entity, option = {script: '', command_bat: ''}) {
        const {script, command_bat} = option
        const entities = {
            [ENTITIES[0]]: () => this.#createCommandBrowser(script),
            [ENTITIES[1]]: () => this.#createCommandApplication(command_bat, script)
        }
        return entities[entity].call()
    }

    generateCommandArray() {
        return applicationConfig.map(script => {
            let command_bat = ''
            const entity = script.entity
            const entities = {
                [ENTITIES[0]]: () => command_bat += this.#buildCommand(ENTITIES[0], {script}),
                [ENTITIES[1]]: () => command_bat += this.#buildCommand(ENTITIES[1], {
                    script,
                    command_bat
                })
            }
            entities[entity]()
            return command_bat
        })
    }

    #createCommandBrowser(script) {
        return `start ${script.href}`
    }

    #createCommandApplication(command_bat, script) {
        console.log('application command: ', script)
        const parse_full_path = script.path.split('\\')
        const application_file = parse_full_path[parse_full_path.length - 1]
        parse_full_path[parse_full_path.length - 1] = ''
        const path_to_file = parse_full_path.join('\\')
        command_bat += `cd ${path_to_file} \n`
        command_bat += `start ${application_file}`
        return command_bat
    }
}