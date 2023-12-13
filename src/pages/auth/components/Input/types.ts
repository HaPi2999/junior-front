/**
 * @Copyright junior-team 2023
 */

import { ChangeEventHandler } from 'react'

export interface IInputProps {
    title: string
    error: string
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string
    type?: string
}

