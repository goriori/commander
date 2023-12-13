import {File} from "../File.js";
import * as path from "path";

const __dirname = path.resolve()

export class Bat extends File {
    constructor(file_name) {
        super();
        this.path_directory = __dirname + '/public/bat'
        this.file_name = file_name
        this.path_to_file = null;
        this.init(file_name, 'bat')
    }

    createBat() {
        this.createDir(this.path_directory)
        this.path_to_file = this.path_directory + '/' + this.file_name + '.bat'
        this.createFile(this.path_to_file)
    }

    editBat(data) {
        const existFile = this.findFile(this.path_to_file)
        if (existFile) {
            this.editFile( this.path_to_file, data)
        }
    }
}