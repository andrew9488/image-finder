export const setSleepMode = (arrIDs: Array<NodeJS.Timeout>, setArrIDs: ([]) => void, setSleep: (isSleep: boolean) => void) => {
    if (arrIDs.length > 0) {
        arrIDs.forEach((value) => {
            window.clearTimeout(value)
        })
        setArrIDs([])
        setSleep(false)
    }
    setArrIDs([...arrIDs, setTimeout(() => {
        setSleep(true)
    }, 60000)
    ])
}