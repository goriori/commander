import {generateId} from "../../utils/id.js";
import applicationConfig from "../../configs/application.config.js";
import * as child_process from "child_process";
import * as path from "path";
import {Bat} from "../File/index.js";

const __dirname = path.resolve()
export default [
    {
        id: generateId(),
        command: 'download_file',
        handler: () => 'downloadFile'
    },
    {
        id: generateId(),
        command: 'workspace',
        handler: () => 'openWorkspace'
    },
    {
        id: generateId(),
        command: 'exit',
        handler:()=> 'exitProgram'
    },
    {
        id: generateId(),
        command: 'test',
        handler:()=> 'test'
    }
]