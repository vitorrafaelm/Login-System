import React, { useState } from 'react';
import api from '../../../services/api';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const RegisterCostumer = () => {
    const [name, setName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const [email, setEmail] = useState(''); 

    const history = useHistory(); 

    const costumer = {
        name, 
        lastName, 
        email
    }

    const handleCostumerForm = async () => {
        try {
            const response = await api.post('costumers', costumer); 
            
            history.go(0);
        } catch (error) {
            console.log(error); 
        }
    }
 
    return (
        <Form
            layout="vertical"   
            onFinish={handleCostumerForm}         
        >
            <Form.Item label="Name" required>
                <Input placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Last name"
                required
            >
                <Input placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Email" required>
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary">Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default RegisterCostumer;

