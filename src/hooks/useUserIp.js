import { useMemo } from 'react'

import { useAsyncRun, useAsyncTaskFetch } from 'react-hooks-async'

function useUserIp() {
    const fetchTask = useAsyncTaskFetch(`https://api.ipify.org?format=json`)
    useAsyncRun(fetchTask)
    const { started, aborted, pending, error, result } = fetchTask

    const ip = useMemo(() => {
        if (result && typeof result.ip !== undefined) {
            return result.ip || null
        }
        return null
    }, [result])

    if (started) {
        return { ip, isLoading: true, error: null }
    }
    if (aborted) {
        return { ip, isLoading: false, error: null }
    }
    if (pending) {
        return { ip, isLoading: true, error: null }
    }
    if (error) {
        return { ip, isLoading: false, error }
    }
    if (ip) {
        return { ip, isLoading: false, error: null }
    }
}

export default useUserIp
