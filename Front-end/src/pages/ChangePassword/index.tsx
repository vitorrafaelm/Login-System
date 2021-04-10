import React, { useState } from 'react'; 
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom'; 
import { ArrowLeftOutlined } from '@ant-design/icons'; 
import { useHistory } from 'react-router-dom'; 
import api from '../../services/api'; 

import 'antd/dist/antd.css';
import '../SignIn/styles.css';
import './changePasswordStyle.css'

const ChangePassword = () => {
    const [email, setEmail] = useState('');

    const history = useHistory(); 

    const mailObject = {
        email
    }

    const changePassword = async () => {
        try {
            const response = await api.post('updatePassword', mailObject); 
            console.log(response.data);
            if(response.data){
                history.push('/emailSended'); 
            }
        } catch (error) {
            
        }
    }

    return (
        <div className="loginContainer">
        
        <Link to="/">
            <ArrowLeftOutlined className="arrow"/>
        </Link>
        <div className="loginBox">
            <h2 className="signInColorH1">Forgot you password?</h2>
            <p className="colorOne">
                Enter your registered email below to receive password reset instruction
            </p>
            <Form
                onFinish={changePassword}
                name="basic"
                layout="vertical"
                wrapperCol={{
                    span: 24,
                }}
            >
                <Form.Item
                    name="email"
                    rules={[{
                        required: true,
                        message: 'Please input your email!',
                    },
                    ]}
                >
                    <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" type="primary" block>Send</Button>
                </Form.Item>
            </Form>
        </div>
    </div>
    );
}

export default ChangePassword;