const {random} = Math
export const generateId = () => {
    return random().toString(16).slice(2)
}