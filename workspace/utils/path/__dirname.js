
import path from 'path'
export const __dirname = (() => {
    const __dirname = path.resolve()
    const path_details = __dirname.split('\\')
    path_details.pop()
    return path.join(...path_details) + '\\logs'
})()