import React from 'react';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import '../SignIn/styles.css';

const SignUp = () => {
    return (
        <>
            <div className="loginContainer">
                <div className="loginBox">
                    <h2 className="signInColorH1">Account successfully created</h2>

                    <div className="colorOne">
                        <Link className="fontWeight" to="/">Log in</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;