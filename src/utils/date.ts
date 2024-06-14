export const timestampToDate = (timestamp: number): Date => new Date(timestamp)
export const dateToTimestamp = (date: Date): number => date.getTime()
export const defferenceInDays = (date1: Date, date2: Date): number => {
  const diff = date1.getTime() - date2.getTime()
  return diff / (1000 * 60 * 60 * 24)
}
