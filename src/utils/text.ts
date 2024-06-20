export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
export const lowerCase = (str: string) => str.toLowerCase()

export const upperCase = (str: string) => str.toUpperCase()

export const reverse = (str: string) => str.split('').reverse().join('')
export const replace = (str: string, searchValue: string, replaceValue: string) =>
  str.replace(searchValue, replaceValue)
export const split = (str: string, separator: string) => str.split(separator)
export const join = (arr: string[], separator: string) => arr.join(separator)
export const formatCurrency = (amount: number) => {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
export const formatNumber = (amount: number) => {
  return amount.toLocaleString('en-US')
}
