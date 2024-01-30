import workspaceConfig from "../../../../workspace.config.js";
import {ENTITIES} from "../../../../settings.config.js";

export class BatCommandBuilder {
    constructor() {
    }

    #buildCommand(entity, option = {script: '', command_bat: ''}) {
        const {script, command_bat} = option
        const entities = {
            [ENTITIES[0]]: () => this.createCommandBrowser(command_bat, script),
            [ENTITIES[1]]: () => this.createCommandApplication(command_bat, script)
        }
        return entities[entity].call()
    }

    generateCommandArray() {
        return workspaceConfig.map(script => {
            let command_bat = ''
            const entity = script.entity
            const entities = {
                [ENTITIES[0]]: () => command_bat += this.#buildCommand(ENTITIES[0], {script, command_bat,}),
                [ENTITIES[1]]: () => command_bat += this.#buildCommand(ENTITIES[1], {script, command_bat})
            }
            entities[entity]()
            return command_bat
        })
    }

    createCommandBrowser(command_bat, script) {
        return this.#createCommandBrowser(command_bat, script)
    }

    createCommandApplication(command_bat, script) {
        return this.#createCommandApplication(command_bat, script)
    }

    #createCommandBrowser(command_bat, script) {
        return command_bat += `start ${script.href}`
    }

    #createCommandApplication(command_bat, script) {
        const parse_full_path = script.path.split('\\')
        const parse_path_length = parse_full_path.length - 1

        const application_file = parse_full_path[parse_path_length]
        parse_full_path[parse_path_length] = ''
        const path_to_file = parse_full_path.join('\\')

        command_bat += `cd ${path_to_file} \n`
        command_bat += `start ${application_file}`

        return command_bat
    }
}