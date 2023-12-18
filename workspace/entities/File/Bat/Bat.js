import {File_System} from "../File.js";
import {Dir} from "../Dir/Dir.js";
import * as path from "path";
import {DIR_FOR_FILES, DIR_ENTITIES} from "../../../settings.config.js";

const __dirname = path.resolve()

export class Bat extends File_System {
    constructor(file_name) {
        super(file_name, 'bat');
        this.path_directory = __dirname + `\\${DIR_FOR_FILES}\\bat`
        this.file_name = file_name
        this.path_to_file = null;
        this.#init()
    }

    async #init() {
        const dir = new Dir()
        const existDir = await dir.findDir(this.path_directory)
        if (!existDir) dir.createDir(this.path_directory)
    }

    createBat() {
        this.path_to_file = this.path_directory + '\\' + this.file_name + '.bat'
        super.createFile(this.path_to_file)
    }

    editBat(data) {
        const existFile = super.findFile(this.path_to_file)
        if (existFile) {
            super.editFile(this.path_to_file, data, 'BAT')
        }
    }
}