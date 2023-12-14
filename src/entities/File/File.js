import * as fs from "fs";
import {Page} from "puppeteer";

export class File {
    constructor() {
        this.type;
        this.file_name
        this.file_system = fs
    }

    init(file_name = '', type = '') {
        this.file_name = file_name;
        this.type = type;
    }

    createDir(path) {
        this.file_system.mkdir(path, {}, () => console.log('success create dir'))
    }

    createFile(path) {
        this.file_system.open(path, 'w', (err, fd) => {
            if (err) return console.log(err)
            console.log(fd)
        })
    }

    findFile(path) {
        const file = this.file_system.readFileSync(path)
        return !!file
    }

    editFile(path, data, type = 'BAT') {
        let convertData
        if(type === 'JSON') convertData = JSON.stringify(data)
        if(type === 'BAT') convertData = data
        this.file_system.appendFileSync(path, convertData)
    }

}