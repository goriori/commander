import {readline, commander} from "./entities/index.js";

const restartHandler = () => {
    console.log('Упс, такой команды нет, давай попробуем еще раз.')
    startHandler()
}
export const startHandler = async (question) => {
    const command = await readline.question(question)
    const rewrite_command = command.replace(' ', '_')
    const result = await commander.run(rewrite_command)
    if (!result) restartHandler()
    else return startHandler('Круто, что нибудь еще? \n')
}


