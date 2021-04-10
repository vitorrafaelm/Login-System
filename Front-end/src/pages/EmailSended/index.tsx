import { Link } from 'react-router-dom'; 
import { ArrowLeftOutlined } from '@ant-design/icons'; 


import 'antd/dist/antd.css';
import '../SignIn/styles.css';
import '../ChangePassword/changePasswordStyle.css';

const EmailSended = () => {
    return (
        <div className="loginContainer">
        
        <Link to="/">
            <ArrowLeftOutlined className="arrow"/>
        </Link>
        <div className="loginBox">
            <h2 className="signInColorH1">Email sended</h2>
            <p className="colorOne">
                Please verify your Email to see your new password 
            </p>
        </div>
    </div>
    );
}

export default EmailSended;