/**
 * @Copyright junior-team 2023
 */

import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react'

const useNameCallback = <T, >(
    setName: Dispatch<SetStateAction<string>>,
    setErrors: Dispatch<SetStateAction<T>>
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
    }, [setName, setErrors])

export default useNameCallback