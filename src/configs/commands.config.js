import {generateId} from "../utils/id.js";
import applicationConfig from "./application.config.js";
import * as child_process from "child_process";
import * as path from "path";
import {Bat} from "../entities/File/index.js";

const __dirname = path.resolve()
export default [
    {
        id: generateId(),
        command: 'download_file',
        handler: () => {
        }
    },
    {
        id: generateId(),
        command: 'start_workspace',
        handler: () => {
            console.log(applicationConfig)
            const bat_file = new Bat('workspace')
            bat_file.createBat()
            bat_file.editBat({name: 'sd'})
            // child_process.exec(__dirname + '/test.bat', (error, stdout, stderr) => {
            //     if (error) return console.log(error)
            //     console.log(stdout, stderr)
            // })
        }
    }
]