import * as fs from "fs";
import * as path from "path";

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
    }



    createDir(path) {
        console.time('createDir')
        this.file_system.mkdir(path, {}, () => console.log('success create dir'))
        console.timeEnd('createDir')
    }

    createFile(path) {
        this.file_system.open(path, 'w', (err, fd) => {
            if (err) return console.log(err)
            console.log(fd)
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

}