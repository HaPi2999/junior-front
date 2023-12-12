/**
 * @Copyright hapi-learn.com 2023
 */

import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react'
import { IErrors } from '../../types'

const useNameCallback = (
    setName: Dispatch<SetStateAction<string>>,
    setErrors: Dispatch<SetStateAction<IErrors>>
) =>
    useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setName(value)

        if (value.length === 0) {
            setErrors((prevState) => ({
                ...prevState,
                name: 'Поле Имя не должно быть пустым'
            }))
        } else {
            setErrors((prevState) => ({
                ...prevState,
                name: ''
            }))
        }
    }, [setName])

export default useNameCallback