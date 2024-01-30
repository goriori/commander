import {File_System} from "../File.js";
import {DIR_ENTITIES, DIR_FOR_FILES} from "../../../settings.config.js";
import {Dir} from "../Dir/Dir.js";
import {__dirname} from "../../../utils/path/__dirname.js";

// TODO: При повторном запуске или первичном - файл JSON создается, но не записывается,
//  из-за чего в дальнейшем приложение коммандер встает и не возвращает результат выполенния
export class Json extends File_System {
    constructor(file_name) {
        super();
        this.file_name = file_name
        this.path_directory = __dirname + `\\${DIR_FOR_FILES}\\${DIR_ENTITIES[1]}`
        this.path_to_file = null
        this.#init()
    }

    #init() {
        const dir = new Dir()
        const existDir = dir.findDir(this.path_directory)
        if (!existDir) dir.createDir(this.path_directory)
    }

    createJSON() {
        this.path_to_file = this.path_directory + '\\' + this.file_name + '.json'
        super.createFile(this.path_to_file)
    }

    getJSONContent() {
        const content_file = super.redFile(this.path_to_file)
        console.log(content_file)
        return JSON.parse(content_file.toString())
    }

    editJSON(data) {
        // console.log('data: ', data)
        new Promise((resolve, reject) => {
            const existFile = super.findFile(this.path_to_file)
            if (!existFile) this.createJSON()
            super.editFile(this.path_to_file, data, 'JSON')
        })
    }

    deleteJSON() {
        super.deleteFile(this.path_to_file)
    }
}

