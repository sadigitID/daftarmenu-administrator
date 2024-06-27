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

export const formatRupiah = (number: string | number): string => {
  if (number == null || number === '') {
    return 'Rp 0'
  }

  const num = parseFloat(number.toString().replace(/[^0-9.-]+/g, ''))
  if (isNaN(num)) {
    return 'Rp 0'
  }

  return `Rp. ${num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} `
}
