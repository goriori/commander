import * as fs from "fs";
import * as path from "path";
import {DIR_ENTITIES, DIR_FOR_FILES} from "../../settings.config.js";


const __dirname = path.resolve()

export class File_System {
    constructor(file_name = '', type = '') {
        this.type;
        this.file_name
        this.file_system = fs
        this.#init(file_name, type)
    }

    async #init(file_name = '', type = '') {
        this.file_name = file_name;
        this.type = type;
        const existDir = this.findDir(__dirname + `\\${DIR_FOR_FILES}`)
        if (!existDir) await this.#initDirs()

    }

    async #initDirs() {
        await this.createDir(__dirname + `\\${DIR_FOR_FILES}`)
        this.#initDirEntities()
    }

    async #initDirEntities() {
        for (const DIR_ENTITY of DIR_ENTITIES) {
            await this.createDir(__dirname + `\\${DIR_FOR_FILES}\\${DIR_ENTITY}`)
        }
    }

    createDir(path) {
        this.file_system.mkdirSync(path )
    }

    createFile(path) {
        this.file_system.open(path, 'w', (err, fd) => {
            if (err) return console.log(err)
        })
    }

    findDir(path) {
        return this.file_system.existsSync(path)
    }

    findFile(path) {
        const file = this.file_system.existsSync(path)
        return file
    }

    editFile(path, data, type = 'BAT') {
        let convertData
        if (type === 'JSON') convertData = JSON.stringify(data)
        if (type === 'BAT') convertData = data
        this.file_system.appendFileSync(path, convertData)
    }

    deleteFile(path) {
        this.file_system.rmSync(path)
        return true
    }

}