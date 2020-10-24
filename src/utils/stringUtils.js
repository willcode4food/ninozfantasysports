function normalize(phoneNumber) {
    // eslint-disable-next-line no-useless-escape
    return phoneNumber
        ? phoneNumber.replace(/^[\+\d{1,3}\-\s]*\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, '$1$2$3')
        : ''
}

export function formatPhone(phoneNumber, formatString, options) {
    let patternToReplace = formatString
    // Normalize the phone number first unless not asked to do so in the options
    const numberToFormat = !options || !options.normalize ? normalize(phoneNumber) : phoneNumber
    for (let i = 0, l = numberToFormat.length; i < l; i++) {
        patternToReplace = patternToReplace.replace('N', numberToFormat[i])
    }

    return patternToReplace
}

export function convertToNumberingScheme(number) {
    var baseChar = 'A'.charCodeAt(0),
        letters = ''

    do {
        number -= 1
        letters = String.fromCharCode(baseChar + (number % 26)) + letters
        number = (number / 26) >> 0 // quick `floor`
    } while (number > 0)

    return letters
}

export function toSnakeCase(string) {
    return string.split(' ').join('_').toLowerCase()
}
