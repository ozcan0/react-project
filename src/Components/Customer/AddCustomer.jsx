import {
    Button,
    Form,
    Input,
    Row,
    Col, Modal
} from 'antd';
import React from 'react';
import {networkServices} from "../../api/axios";

function AddCustomer() {

    const onFinish = (values) => {
        networkServices.add('customers', values)
            .then((res) =>{
                Modal.success({
                    content: 'new customer ' + res.companyName,
                });
            })
    }

    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="vertical"
                onFinish={onFinish}
                size='large'
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
                    <Button type="primary" htmlType="submit">Ekle</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddCustomer