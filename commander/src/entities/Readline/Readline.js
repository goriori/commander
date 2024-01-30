import readline from "readline";
import * as fs from "fs";
// TODO: При вводе пустого значения в консоль - вывдиться undefined но ввод продолжается.

// TODO: Надо разобраться с отслеживанием момента создания конфигурационного файла commander.config.json для распаковки его свойств.
const exist = fs.existsSync('../../../../commander.config.js')
console.log(exist)
export class Readline {
    #message_timeout

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        this.#initEvents()
        this.#message_timeout = 'Время ожидания вышло'
        this.signal = AbortSignal.timeout(10 * 60000)
        this.signal.addEventListener('abort', () => {
            console.log(this.#message_timeout)
            process.exit(0)
        }, {once: true})

    }

    question(question) {
        return new Promise((resolve, reject) => this.rl.question(question, {signal: this.signal}, resolve))
    }

    write(message) {
        return this.rl.write(message)
    }

    #initEvents() {
        this.#initOnResume()
        this.#initOnInput()
        this.#initOnClose()
    }

    #initOnResume() {
        this.rl.addListener('resume', () => {
            console.log('readline resume')
        })
    }

    #initOnInput() {
        this.rl.addListener('line', (message) => {
            console.log('on message: ', message)
        })
    }

    #initOnClose() {
        this.rl.addListener('close', () => {
            console.log('процесс завершен')
        })
    }


}


