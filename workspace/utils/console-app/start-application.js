import chalk from "chalk";

const {red, green, blue, black, yellow, gray, greenBright} = chalk
const NAME_APPLICATION = 'WORKSPACE'
const START_APPLICATION = `START APPLICATION ${NAME_APPLICATION}`
const END_APPLICATION = `END APPLICATION ${NAME_APPLICATION}`
const SPACES = '\n=====================================\n'
export const startApplication = () => {
    console.log(
        yellow(SPACES),
        blue(START_APPLICATION),
        yellow(SPACES),
    )
}

export const endApplication = () => {
    console.log(
        yellow(SPACES),
        blue(END_APPLICATION),
        yellow(SPACES),
    )
}
