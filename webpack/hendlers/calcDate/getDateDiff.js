import { DateTime } from 'luxon'

export const getDateDiff = (dateFrom, dateTo) => {

  if (dateFrom > dateTo) {
    [dateTo, dateFrom] = [dateFrom, dateTo]
  }

  const dateFromObj = DateTime.fromISO(dateFrom)
  const dateToObj = DateTime.fromISO(dateTo)

  return dateToObj.diff(dateFromObj, ['years', 'months', 'days']).toObject()

}