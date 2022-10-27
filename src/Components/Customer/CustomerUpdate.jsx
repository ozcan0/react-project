import {
    Button,
    Form,
    Input,
    Row,
    Col
} from 'antd';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {networkServices} from "../../api/axios";

function CustomerUpdate() {

    let {id} = useParams();
    const form = useRef(null)
    const [customer, setCustomer] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        networkServices.getById('customers', id)
            .then(data => {
                setCustomer(data);
                form.current.resetFields()
            })
    }, [])

    const onFinish = (values) => {
        networkServices.update("customers", values, id)
            .then(res => {
                navigate('/customers');
            })

    };

    return (
        <>
            <Form
                ref={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="vertical"
                onFinish={onFinish}
                size='large'
                initialValues={customer}
            >

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="Company Name" name='companyName'
                        rules={[{required: true, message:'Please input product Company Name!'}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Contact Name" name='contactName'
                                   rules={[{required: true, message:'Please input product Contact Name!'}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Contact Title" name='contactTitle'
                                   rules={[{required: true, message:'Please input product Contact Title!'}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="ID" name='id'
                                   rules={[{required: true, message:'Please input product ID!'}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                        <Button type="primary" htmlType="submit">Güncelle</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default CustomerUpdate