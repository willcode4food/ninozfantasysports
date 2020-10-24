import React, { useState, useEffect } from 'react'
import { COLORS } from 'utils/styleHelpers'
import { Wrapper, MoonOrSun, MoonMask } from './styles'

function ThemeToggle() {
    const [theme, setTheme] = useState(null)
    useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => {
            setTheme(window.__theme)
        }
    }, [])
    const isDark = theme === `dark`

    return (
        <Wrapper
            aria-label={isDark ? `Activate light mode` : `Activate dark mode`}
            isDark={isDark}
            onClick={() => {
                setTheme(isDark ? 'light' : 'dark')
                window.__setPreferredTheme(isDark ? 'light' : 'dark')
            }}
            title={isDark ? `Activate light mode` : `Activate dark mode`}
        >
            {theme !== null ? (
                <>
                    <MoonOrSun isDark={isDark} color={COLORS.TOGGLE} darkColor={COLORS.PRIMARY} />
                    <MoonMask isDark={isDark} />
                </>
            ) : (
                <div style={{ height: '24px' }} />
            )}
        </Wrapper>
    )
}

export default ThemeToggle
