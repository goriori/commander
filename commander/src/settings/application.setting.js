import {generateId} from "../utils/id.js";

export const APPLICATIONS = [
    {
        id: generateId(),
        name: 'itlabs-server',
        path: 'C:\\goriori\\github\\itlabs-server',
        command: 'node index.js'
    },
    {
        id: generateId(),
        name: 'workspace',
        path: 'C:\\goriori\\github\\commander\\workspace',
        command: 'node index.js'
    }
]