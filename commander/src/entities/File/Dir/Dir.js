import {File_System} from "../File.js";


export class Dir extends File_System {
    constructor() {
        super();
    }

    createDir(path) {
        super.createDir(path);
    }
    findDir(path) {
        return super.findDir(path);
    }
}