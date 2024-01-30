export const applicationsParser = (commands) => {
    const browser_elements = ['https', 'http', 'file']
    const extend_application = '.exe'


    // commands - массив с командами для батника
    return commands.map(command => {

        const is_browserRun = browser_elements
            .map(element => command.includes(element))
            .filter(item => item)
            .find(item => item)
        const is_applicationRun = command.includes(extend_application)

        if (is_browserRun) return 'chrome.exe'
        else if (is_applicationRun)  return command.split('\n')[1].replaceAll('start', '').trim()

    })

}

