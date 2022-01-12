export const getEmail = () => {
    if(localStorage.getItem('user') === null)
        return null
    return JSON.parse(localStorage.getItem('user') || '{}')
}