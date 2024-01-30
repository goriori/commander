import * as path from "path";
import {File_System} from "../entities/File/File.js";
import {dirs, files, rootDir} from "./Initializer.option.js";


const file = new File_System()

// Инициализирует директории для дальнейшей работы на главном уровне
export class Initializer {
    constructor() {
        this.dirs = [...dirs]
        this.files =[...files]
        this.#init()
    }

    #init() {
        this.#renderBaseDirs(this.dirs, rootDir)
        this.#renderBaseFiles()
    }

    #renderBaseDirs(dirs, path) {
        for (let i = 0; i < dirs.length; i++) {
            let fullPath = path + '\\' + dirs[i].dir_name
            file.createDir(fullPath)
            dirs[i].children.length > 0 ? this.#renderBaseDirs(dirs[i].children,fullPath ) : true;
        }
    }

    #renderBaseFiles() {
        this.files.forEach(base_file => {
            const path = rootDir + '\\' + base_file.file_name + base_file.extend
            const existFile = file.findFile(path)
            if(!existFile) {
                console.log(`file ${base_file.file_name}${base_file.extend} does not exist.`)
                console.log('start process create file.')
                file.createFile(path)
                file.editFile(path, base_file.default_content, 'JSON')
                console.log('process finish')
            }
            console.log(`file ${base_file.file_name}${base_file.extend} exist`)

        })
    }
}

