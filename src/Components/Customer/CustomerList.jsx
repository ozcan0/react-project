import {Table, Button, Modal} from 'antd';
import React, { useEffect, useState } from 'react';
import {networkServices} from "../../api/axios";
import { DeleteOutlined, EditOutlined, ZoomInOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";

function CustomerList() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers = () => {
        networkServices.getAll('customers')
            .then(data => {
                setTimeout(() => {
                    setUsers(data)
                    setLoading(false)
                }, 500)
            })
            .catch((err) => {
                console.log('Error', err);
                throw err
            })
    }

    const deleteCustomer = (id) => {
        setLoading(true);
        networkServices.delete('customers', id)
            .then(res => {
                getCustomers();
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                Modal.error({
                    title: 'Hata Var',
                    content:'silinemedi ...',
                })
            })
    }

    const updateCustomer = (id) => {
        navigate('/customers/update/' + id);
    }

    const detailCustomer = (id) => {
        navigate('/customers/detail/' + id);
    }

    const columns = [
        {
            title:'Id',
            dataIndex:'id',
            
        },{
            title:'Company Name',
            dataIndex:'companyName',
            sorter: (a, b) => a.companyName.localeCompare(b.companyName)
        },{
            title:'Contact Name',
            dataIndex:'contactName',
            sorter: (a, b) => a.contactName.localeCompare(b.contactName)
        },{
            title:'Contact Title',
            dataIndex:'contactTitle',
            sorter: (a, b) => a.contactTitle.localeCompare(b.contactTitle)
        },
        {
            title:'Del',
            dataIndex: 'id',
            render: (id) =>
                <Button
                    type="primary"
                    danger
                    shape="circle"
                    icon={<DeleteOutlined />}
                    onClick={()=> deleteCustomer(id)}
                />
        },
        {
            title:'Upd',
            dataIndex: 'id',
            render: (id) =>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<EditOutlined />}
                    onClick={()=> updateCustomer(id)}
                />
        },
        {
            title:'Detail',
            dataIndex: 'id',
            render: (id) =>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<ZoomInOutlined />}
                    onClick={()=> detailCustomer(id)}
                />
        }
    ]

    return (
        <>
            <Table loading={loading} dataSource={users} columns={columns} rowKey='id'></Table>
        </>
    )
}

export default CustomerList