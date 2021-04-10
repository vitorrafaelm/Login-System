import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Table, Tag, Space } from 'antd';


const List = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: any) => (
                <Space size="large">
                    {text}
                </Space>
            ),
        },
        {
            title: 'Last name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Identificação no banco',
            dataIndex: 'id',
            key: 'id',
            render: (text: any) => (
                <Space size="small">
                    <Tag color={'geekblue'} key={1}>
                        {text}
                    </Tag>
                </Space>
            ),
        },
    ];

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await api.get('costumers');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);



    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        </>
    )
}

export default List;