/**
 * @Copyright junior-team 2023
 */

import React, { FC, memo, useCallback, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import useEmailCallback from '../../hooks/useEmailCallback'
import usePasswordCallback from '../../hooks/usePasswordCallback'
import { IErrors } from './types'
import { REGISTER } from '~pages/auth/constants'
import { IRegisterFormProps } from '../RegisterForm/types'

const RegisterForm: FC<IRegisterFormProps> = ({ setHash }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState<IErrors>({
        email: '',
        password: '',
    })


    const handleEmailChange = useEmailCallback<IErrors>(setEmail, setErrors)
    const handlePasswordChange = usePasswordCallback<IErrors>(setPassword, setErrors)
    const handleRegisterRedirect = useCallback(() => setHash(REGISTER), [setHash])

    return (
        <div className="form">
            <Input
                title="Почта"
                onChange={handleEmailChange}
                value={email}
                error={errors.email}
            />
            <Input
                title="Пароль"
                onChange={handlePasswordChange}
                value={password}
                type="password"
                error={errors.password}
            />
            <div className="btn-container">
                <Button
                    title="Авторизоваться"
                    onClick={() => {}}
                />
                <div className="sign-in" onClick={handleRegisterRedirect}>
                    Зарегистрироваться
                </div>
            </div>
        </div>
    )
}

export default memo(RegisterForm)
