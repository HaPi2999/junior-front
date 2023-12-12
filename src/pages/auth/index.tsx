/**
 * @Copyright hapi-learn.com 2023
 */

import React, { FC, memo } from 'react'
import RegisterForm from './components/RegisterForm'

const Auth: FC = () => {
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
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default memo(Auth)
