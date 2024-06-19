export const formatPercentage = (number: string | number): string => {
  if (number == null || number === '') {
    return '0%'
  } else {
    const value = parseFloat(number.toString())
    const result = `${value.toFixed(2)}`
    if (result.includes('.00')) {
      return `${result.replace('.00', '')}%`
    } else {
      return `${result}%`
    }
  }
}
