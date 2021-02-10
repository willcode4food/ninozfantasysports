import { format, parseISO } from 'date-fns'

export function formatIsoDate(date) {
    return format(parseISO(date), `MMMM do, yyyy`)
}
