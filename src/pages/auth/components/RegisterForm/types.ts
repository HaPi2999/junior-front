/**
 * @Copyright junior-team 2023
 */

import { Dispatch, SetStateAction } from 'react'

export interface IErrors {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export interface IRegisterFormProps {
    setHash: Dispatch<SetStateAction<string>>
}