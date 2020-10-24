const COLORS = {
    PRIMARY: '#FFF',
    PRIMARY_BUTTON: '#FF1647',
    PRIMARY_DARK: '#1e2427',
    TERNARY_DARK: '#495358',
    SECONDARY: '#c60028',
    SECONDARY_DARK: '#263238',
    TERNARY: '#ededed',
    TOGGLE: '#C4C8D8',
    ERROR: '#c60028',
}

const DEFAULT_AVATAR_THEMES = [
    {
        foreground: COLORS.PRIMARY,
        background: COLORS.SECONDARY,
        border: COLORS.SECONDARY,
    },
    {
        foreground: COLORS.PRIMARY,
        background: COLORS.TOGGLE,
        border: COLORS.TOGGLE,
    },
    {
        foreground: COLORS.SECONDARY_DARK,
        background: COLORS.PRIMARY,
        border: COLORS.SECONDARY_DARK,
    },
    {
        foreground: COLORS.SECONDARY,
        background: COLORS.PRIMARY,
        border: COLORS.SECONDARY,
    },
]
const MAX_WIDTH = {
    S: '250px',
    M: '320px',
    L: '600px',
}

const SPACERS = {
    XS: '2px',
    S: '5px',
    M: '10px',
    L: '20px',
    XL: '50px',
    HEADER: '70px',
    FOOTER: '250px',
}

const BREAKPOINTS = [
    ['XS', 0],
    ['S', 576],
    ['M', 768],
    ['L', 992],
    ['XL', 1200],
    ['XXL', 1900],
]
const BREAKPOINTS_VALUES = BREAKPOINTS.reduce(
    (acc, bp) => ({
        ...acc,
        [bp[0]]: bp[1],
    }),
    {}
)

const matchMedia = BREAKPOINTS.reduce(
    (acc, bp) => ({
        ...acc,
        [bp[0]]: `(min-width: ${bp[1]}px)`,
    }),
    {}
)
const MQ = BREAKPOINTS.reduce(
    (acc, bp) => ({
        ...acc,
        [bp[0]]: `@media ${matchMedia[bp[0]]}`,
    }),
    {}
)

// font sizes in comments below are calculated from 16px base font-size
const FONT_SIZES = {
    LARGE_HEADER: '2.5rem',
    H1: '2rem', // 32px
    H2: '1.68179rem', // ~27px
    H3: '1.41421rem', // ~23px
    H4: '1.12246rem', // ~18px
    H5: '0.875rem', // ~14px
    H6: '0.7937rem', // ~13px
    H7: '0.75rem', // ~12px
    H8: '0.625rem', // ~10px
    H9: '0.5rem',
}

const FONT_FAMILY = 'Fjalla One'

const EFFECT_COLORS = {
    effects: COLORS.SECONDARY,
    negative_effects: '#e02e00',
    medical: '#1977a7',
}

const shadeColor2 = (color, percent) => {
    const f = parseInt(color.slice(1), 16)
    const t = percent < 0 ? 0 : 255
    const p = percent < 0 ? percent * -1 : percent
    // eslint-disable-next-line no-bitwise
    const R = f >> 16
    // eslint-disable-next-line no-bitwise
    const G = (f >> 8) & 0x00ff
    // eslint-disable-next-line no-bitwise
    const B = f & 0x0000ff
    return `#${(
        0x1000000 +
        (Math.round((t - R) * p) + R) * 0x10000 +
        (Math.round((t - G) * p) + G) * 0x100 +
        (Math.round((t - B) * p) + B)
    )
        .toString(16)
        .slice(1)}`
}

module.exports = {
    COLORS,
    DEFAULT_AVATAR_THEMES,
    MAX_WIDTH,
    SPACERS,
    BREAKPOINTS_VALUES,
    MQ,
    FONT_FAMILY,
    FONT_SIZES,
    EFFECT_COLORS,
    matchMedia,
    shadeColor2,
}
