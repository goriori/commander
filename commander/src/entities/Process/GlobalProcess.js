import * as child_process from "child_process";

export class GlobalProcess {
    #started_process
    constructor() {
        this.global_process = process
        this.child_process = child_process
        this.#started_process = []
        this.all_process = []
        this.#getAllProcess()
    }
    getStartedProcess(){
        return this.#started_process
    }
    #getAllProcess() {
        const buffer_commands = this.child_process.execSync('tasklist')
        const string_buffer = buffer_commands.toString('utf8')
        const process_lines = string_buffer.trim().split('\n')
        process_lines.shift()
        process_lines.shift()
        this.all_process = process_lines.map(process => {
            const process_structure = {}
            const line_process = process.split(/\s+/)
            process_structure.name = line_process[0]
            process_structure.process_id = line_process[1]
            process_structure.type_session = line_process[2]
            process_structure.number_session = line_process[3]
            process_structure.memory = line_process[4] + ' KB'
            return process_structure
        })
    }
    addStartedProcess(process){
        this.#started_process.push(process)
    }
    killProcess(name) {
        const find_process = this.all_process.find(process => process.name === name)
        if (!find_process) return false
        this.child_process.execSync(`taskkill /F /PID ${find_process.process_id}`)
    }
}

