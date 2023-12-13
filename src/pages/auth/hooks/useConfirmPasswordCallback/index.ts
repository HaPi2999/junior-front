/**
 * @Copyright junior-team 2023
 */

import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react'

const useConfirmPasswordCallback = <T, >(
    password: string,
    setConfirmPassword: Dispatch<SetStateAction<string>>,
    setErrors: Dispatch<SetStateAction<T>>
) => useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setConfirmPassword(value)

    if (password !== value) {
        setErrors((prevState) => ({
            ...prevState,
            confirmPassword: 'Пароли не совпадают'
        }))
    } else {
        setErrors((prevState) => ({
            ...prevState,
            confirmPassword: ''
        }))
    }
}, [setConfirmPassword, setErrors, password])

export default useConfirmPasswordCallback