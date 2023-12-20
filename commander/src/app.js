import {readline, commander} from "./entities/index.js";

const restartHandler = async () => {
    return startHandler('Упс, такой команды нет, давай попробуем еще раз.\n')
}
export const startHandler = async (question) => {
    const command = await readline.question(question)
    const rewrite_command = command.replace(' ', '_')
    const result = await commander.run(rewrite_command)
    if (!result) await restartHandler()
    else await startHandler('Отлично, что нибудь еще? \n')

}


