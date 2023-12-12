/**
 * @Copyright hapi-learn.com 2023
 */

import React, { FC, memo, useMemo } from 'react'
import { IInputProps } from './types'
import clsx from 'clsx'

const Input: FC<IInputProps> = ({
    title,
    error,
    value,
    type = 'text',
    onChange
}) => {
    const formattedValue = useMemo(() => {
        let result = value

        if (type === 'password') {
            result = ''
            for (let i = 0; i < value.length; i++) {
                result += '*'
            }
        }

        return result
    }, [value])

    return (
        <div className="input">
            <div className="title">{title}</div>
            <input
                type="text"
                value={formattedValue}
                onChange={onChange}
                className={clsx(!!error && 'input-error')}
            />
            {!!error && (
                <div className="error">
                    {error ?? 'Некорректное значения'}
                </div>
            )}
        </div>
    )
}

export default memo(Input)
