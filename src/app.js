import {readline, puppeteer, commander} from "./entities/index.js";
import {commands} from "./entities/Commander/Commander.option.js";

const restartHandler = () => {
    console.log('Упс, такой команды нет, давай попробуем еще раз.')
    startHandler()
}
export const startHandler = async (question) => {
    const command = await readline.question(question)
    const rewrite_command = command.replace(' ', '_')
    const found_command = commands.find(command => command.command === rewrite_command)
    if (found_command) {
        await commander.run(rewrite_command)
        return startHandler('Круто, что нибудь еще? \n')
    } else restartHandler()
}


