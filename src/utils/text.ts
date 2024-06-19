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
export const isEmailValid = (email: string) => {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

export const isPasswordValid = (password: string) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  return re.test(password)
}

export const isNameValid = (name: string) => {
  const re = /^[a-zA-Z\s]*$/
  return re.test(name)
}

export const isPhoneValid = (phone: string) => {
  const re = /^[0-9]*$/
  return re.test(phone)
}

export const isUrlValid = (url: string) => {
  const re = /^(ftp|http|https):\/\/[^ "]+$/
  return re.test(url)
}

export const isImageValid = (image: string) => {
  const re = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
  return re.test(image)
}
