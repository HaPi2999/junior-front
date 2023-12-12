/**
 * @Copyright hapi-learn.com 2023
 */

import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react'
import { IErrors } from '~pages/auth/components/RegisterForm/types'

const useConfirmPasswordCallback = (
    password: string,
    setConfirmPassword: Dispatch<SetStateAction<string>>,
    setErrors: Dispatch<SetStateAction<IErrors>>
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