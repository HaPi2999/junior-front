/**
 * @Copyright hapi-learn.com 2023
 */

import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react'
import { IErrors } from '~pages/auth/components/RegisterForm/types'

const usePasswordCallback = (
    setPassword: Dispatch<SetStateAction<string>>,
    setErrors: Dispatch<SetStateAction<IErrors>>
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
    }, [setPassword])

export default usePasswordCallback