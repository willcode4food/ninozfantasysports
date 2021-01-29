export function sortByKey(array, key) {
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

export function sortBy2Keys(array, key1, key2) {
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

export function unique(value, index, self) {
    return self.indexOf(value) === index
}

export function leagueSeasonSorter(prop1, prop2 = null, direction = 'asc') {
    return (e1, e2) => {
        const a = e1[prop1],
            b = e2[prop1],
            sortOrder = direction === 'asc' ? 1 : -1
        const a1 = new Date(Math.min(...a.map((e) => new Date(e[prop2]))))
        const b1 = new Date(Math.min(...b.map((e) => new Date(e[prop2]))))

        return a1 < b1 ? -sortOrder : a1 > b1 ? sortOrder : 0
    }
}
