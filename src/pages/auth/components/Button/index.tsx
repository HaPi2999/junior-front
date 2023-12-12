/**
 * @Copyright hapi-learn.com 2023
 */

import React, { FC, memo } from 'react'
import { IButtonProps } from './types'

const Button: FC<IButtonProps> = ({ title, onClick }) => {
    return (
        <div className="button" onClick={onClick}>
            {title}
        </div>
    )
}

export default memo(Button)
