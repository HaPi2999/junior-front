/**
 * @Copyright junior-team 2023
 */

import { Dispatch, SetStateAction } from 'react'

export interface IErrors {
    email: string
    password: string
}

export interface ILoginFormProps {
    setHash: Dispatch<SetStateAction<string>>
}

