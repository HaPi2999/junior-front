/**
 * @Copyright junior-team 2023
 */

import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react'

const usePasswordCallback = <T, >(
    setPassword: Dispatch<SetStateAction<string>>,
    setErrors: Dispatch<SetStateAction<T>>
) => useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setPassword(value)

        if (value.length < 6) {
            setErrors((prevState) => ({
                ...prevState,
                password: 'Минимальная длинна пароля 6 символов'
            }))
        } else {
            setErrors((prevState) => ({
                ...prevState,
                password: ''
            }))
        }
    }, [setPassword, setErrors])

export default usePasswordCallback