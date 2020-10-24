export const sortByKey = (array, key) => {
    return array.sort((a, b) => {
        const A = a[key].toUpperCase() // ignore upper and lowercase
        const B = b[key].toUpperCase() // ignore upper and lowercase
        if (A < B) {
            return -1
        }
        if (A > B) {
            return 1
        }

        // names must be equal
        return 0
    })
}

export const sortBy2Keys = (array, key1, key2) => {
    return array.sort((a, b) => {
        const A1 = a[key1].toUpperCase()
        const B1 = b[key1].toUpperCase()
        const A2 = a[key2].toUpperCase()
        const B2 = b[key2].toUpperCase()
        if (A1 === B1) {
            // eslint-disable-next-line no-nested-ternary
            return A2 < B2 ? -1 : A2 > B2 ? 1 : 0
        }
        return A1 < B1 ? -1 : 1
    })
}

export const unique = (value, index, self) => {
    return self.indexOf(value) === index
}
