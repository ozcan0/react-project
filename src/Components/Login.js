import { Button, Row, Col, Checkbox, Form, Input, Avatar} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import 'antd/dist/antd.min.css';

const Login = () =>{

    const history = useNavigate();


    const onFinish = async (values)=>{
        if(values.username == "dgpays@mail.com" && values.password==123){
            history('/customers');
        }else{
            console.log("hata")
        }
    };


    return(
        <>
            <Row>
                <Col span={24}>
                    <Avatar style={{marginBottom:"30px"}} size={100}>DGPAYS</Avatar>
                </Col>
                <Col span={24}>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Username"
                                id="username"
                                required
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="********"
                                id="password"
                                required
                            />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                            Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </>
    )
}

export default Login