export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
// ref:  https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript?noredirect=1&lq=1

export function capitalize (str = '') {
  return typeof str !== 'string' ? '' : str[0].toUpperCase() + str.slice(1)
}
