import {generateId} from "../utils/id.js";
import path from "path";
export const rootDir = (() => {
    const __dirname = path.resolve()
    const path_details = __dirname.split('\\')
    path_details.pop()
    return path.join(...path_details)
})()
export const dirs = [
    {
        id: generateId(),
        dir_name: 'logs',
        children: [
            {
                id: generateId(),
                dir_name: 'files',
                children: [
                    {
                        id: generateId(),
                        dir_name: 'bat',
                        children: []
                    },
                    {
                        id: generateId(),
                        dir_name: 'json',
                        children: []
                    }
                ]
            }
        ]
    }
]

export const files =  [
    {
        id: generateId(),
        file_name: 'history',
        extend: '.txt',
        default_content: ''
    },
    {
        id: generateId(),
        file_name: 'commander.config',
        extend: '.json',
        default_content: {
            "EXPECTATION_TIME": 10,
            "PATH_LIST_APPLICATIONS_STARTED":rootDir + '\\files\\json\\application_run.json'

        }
    }
]