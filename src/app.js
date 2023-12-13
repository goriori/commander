import {readline, puppeteer} from "./entities/index.js";
import commandsConfig from "./configs/commands.config.js";

const restartHandler = () => {
    console.log('Упс, такой команды нет, давай попробуем еще раз.')
    startHandler()
}
export const startHandler = async () => {
    const command = await readline.question('Что будем делать сегодня?\n')
    const rewrite_command = command.replace(' ', '_')
    const found_command = commandsConfig.find(command => command.command === rewrite_command)
    if (found_command) return found_command.handler()
    else restartHandler()
}


