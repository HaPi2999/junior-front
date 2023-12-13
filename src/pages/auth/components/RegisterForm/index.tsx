/**
 * @Copyright junior-team 2023
 */

import React, { FC, memo, useCallback, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import useNameCallback from '~pages/auth/hooks/useNameCallback'
import useEmailCallback from '../../hooks/useEmailCallback'
import usePasswordCallback from '~pages/auth/hooks/usePasswordCallback'
import useConfirmPasswordCallback from '../../hooks/useConfirmPasswordCallback'
import { IErrors } from './types'
import { LOGIN } from '~pages/auth/constants'
import { ILoginFormProps } from '../LoginForm/types'
import useRegisterMutation from './hooks/useRegisterMutation'

const RegisterForm: FC<ILoginFormProps> = ({ setHash }) => {
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


    const { isLoading, data, error, mutate } = useRegisterMutation()

    const handleNameChange = useNameCallback<IErrors>(setName, setErrors)
    const handleEmailChange = useEmailCallback<IErrors>(setEmail, setErrors)
    const handlePasswordChange = usePasswordCallback<IErrors>(setPassword, setErrors)
    const handleConfirmPasswordChange = useConfirmPasswordCallback<IErrors>(password, setConfirmPassword, setErrors)
    const handleLoginRedirect = useCallback(() => setHash(LOGIN), [setHash])

    console.log(data)

    const handleRegister = useCallback(() => {
        mutate({
            username: name,
            email: email,
            password: password
        })

        return 0
    }, [name, email, password, mutate])


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
                    onClick={handleRegister}
                />
                <div className="sign-in" onClick={handleLoginRedirect}>
                    Я уже зарегистрирован
                </div>
            </div>
        </div>
    )
}

export default memo(RegisterForm)
