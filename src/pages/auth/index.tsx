/**
 * @Copyright junior-team 2023
 */

import React, { FC, memo, useState } from 'react'
import RegisterForm from './components/RegisterForm'
import { LOGIN, REGISTER } from './constants'
import LoginForm from './components/LoginForm'

const Auth: FC = () => {
    const [hash, setHash] = useState(LOGIN)

    return (
        <div id="auth">
            <div className="container">
                <div className="part left">
                    <img src="/images/auth.jpg" alt="img" />
                    <div className="title">Junior Team</div>
                    <div className="description">
                        Программисты из Таджикистана
                    </div>
                </div>
                <div className="part">
                    { hash === LOGIN && <LoginForm setHash={setHash} /> }
                    { hash === REGISTER && <RegisterForm setHash={setHash} /> }
                </div>
            </div>
        </div>
    )
}

export default memo(Auth)
