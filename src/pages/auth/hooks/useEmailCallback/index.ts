/**
 * @Copyright junior-team 2023
 */

import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react'

const useEmailCallback = <T, >(
    setEmail: Dispatch<SetStateAction<string>>,
    setErrors: Dispatch<SetStateAction<T>>
) =>
    useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setEmail(value)
        const regex = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g)

        if (!regex.test(value)) {
            setErrors((prevState) => ({
                ...prevState,
                email: 'Введен некорректный Email'
            }))
        } else {
            setErrors((prevState) => ({
                ...prevState,
                email: ''
            }))
        }
    }, [setEmail, setErrors])

export default useEmailCallback