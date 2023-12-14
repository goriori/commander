import {generateId} from "../../utils/id.js";
import * as path from "path";

const __dirname = path.resolve()
export const commands = [
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
        command: 'open_name',
        handler:()=> 'openName'
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
