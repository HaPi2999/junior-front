/**
 * @Copyright hapi-learn.com 2023
 */

import React, { FC, memo, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import useNameCallback from '~pages/auth/components/RegisterForm/hooks/useNameCallback'
import useEmailCallback from '~pages/auth/components/RegisterForm/hooks/useEmailCallback'
import usePasswordCallback from '~pages/auth/components/RegisterForm/hooks/usePasswordCallback'
import useConfirmPasswordCallback from '~pages/auth/components/RegisterForm/hooks/useConfirmPasswordCallback'
import { IErrors } from '~pages/auth/components/RegisterForm/types'

const RegisterForm: FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errors, setErrors] = useState<IErrors>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })


    const handleNameChange = useNameCallback(setName, setErrors)
    const handleEmailChange = useEmailCallback(setEmail, setErrors)
    const handlePasswordChange = usePasswordCallback(setPassword, setErrors)
    const handleConfirmPasswordChange = useConfirmPasswordCallback(password, setConfirmPassword, setErrors)

    return (
        <div className="form">
            <Input
                title="Имя"
                onChange={handleNameChange}
                value={name}
                error={errors.name}
            />
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
            <Input
                title="Подтверждение пароля"
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
                type="password"
                error={errors.confirmPassword}
            />
            <div className="btn-container">
                <Button
                    title="Регистрация"
                    onClick={() => {}}
                />
                <div className="sign-in">
                    Я уже зарегистрирован
                </div>
            </div>
        </div>
    )
}

export default memo(RegisterForm)
