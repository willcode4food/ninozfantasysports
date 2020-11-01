import { useEffect, useState } from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

function useBreakpointDetector() {
    const breakpoints = useBreakpoint()
    const [isSmall, setIsSmall] = useState(false)
    const [isMedium, setIsMedium] = useState(false)
    const [isLarge, setIsLarge] = useState(false)

    useEffect(() => {
        const { XS, S, M, L, XL, XXL } = breakpoints
        if (!XS && S && M && L && XL && XXL) {
            setIsLarge(false)
            setIsMedium(false)
            setIsSmall(true)
        }
        if (!XS && !S && !M && !L && !XL && XXL) {
            setIsLarge(true)
            setIsMedium(false)
            setIsSmall(false)
        }
        if (!XS && !S && M && L && XL && XXL) {
            setIsLarge(false)
            setIsMedium(true)
            setIsSmall(true)
        }
    }, [breakpoints])

    return {
        isSmall,
        isMedium,
        isLarge,
    }
}

export default useBreakpointDetector
