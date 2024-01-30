import {readline, commander} from "./entities/index.js";
import {Initializer} from "./initializer/Initializer.js";

const restartHandler = async () => {
    return startHandler('Упс, такой команды нет, давай попробуем еще раз.\n')
}
export const startHandler = async (question) => {
    new Initializer()
    const command = await readline.question(question)
    const rewrite_command = command.replace(' ', '_')
    const result = await commander.run(rewrite_command)
    console.log('result command: ', result)
    if (!result) await restartHandler()
    else await startHandler('Отлично, что нибудь еще? \n')

}


