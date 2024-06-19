export const timestampToDate = (timestamp: number): Date => new Date(timestamp)
export const dateToTimestamp = (date: Date): number => date.getTime()
export const defferenceInDays = (date1: Date, date2: Date): number => {
  const diff = date1.getTime() - date2.getTime()
  return diff / (1000 * 60 * 60 * 24)
}

export const timestampToDateFormated = (timestamp: number): string => {
  const date = new Date(timestamp)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

export const daysSinceNow = (timestamp: number): number => {
  const now = new Date()
  const expiredDate = new Date(timestamp)
  const differenceInTime = now.getTime() - expiredDate.getTime()
  return Math.floor(differenceInTime / (1000 * 3600 * 24))
}
