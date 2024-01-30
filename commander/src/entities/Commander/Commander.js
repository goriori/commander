import {commands} from "./Commander.option.js";
import {Process} from "../Process/Process.js";
import {APPLICATIONS} from "../../../application.config.js";
import {GlobalProcess} from "../Process/GlobalProcess.js";
import * as path from "path";
import {File_System} from "../File/File.js";

const file = new File_System()
const __rootDir = (() => {
    const __dirname = path.resolve()
    const path_details = __dirname.split('\\')
    path_details.pop()
    return path.join(...path_details) + '\\logs'
})()


export class Commander {
    constructor() {
        this.commands = [...commands]
        this.globalProcess = new GlobalProcess()
    }

    async run(command) {
        const exists_command = this.commands.map(comm => comm.command).includes(command)
        if (!exists_command) return false
        const action_commander = this.commands.find(comm => comm.command === command).handler()
        const result = await this[action_commander]()
        console.log('result call function:  ', result)
        return result
    }


    async openWorkspace() {
        try {
            console.log('start openWorkspace')
            const process = new Process()
            await process.runProject(APPLICATIONS[1].command, APPLICATIONS[1].path)
            const started_applications = JSON.parse(file.getFileContent(__rootDir + '\\files\\json\\application_run.json'))
            started_applications.forEach(application => this.globalProcess.addStartedProcess(application))
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }

    async test() {
        console.log('test function ')
        const process = new Process()
        const output = await process.runProject(APPLICATIONS[0].command, APPLICATIONS[0].path)
        return true
    }


    downloadFile() {
        console.log('download File')
    }

    exitProgram() {
        const started_process = this.globalProcess.getStartedProcess()
        console.log(started_process)
        started_process.forEach(process => this.globalProcess.killProcess(process))
        process.exit(0)
    }
}

