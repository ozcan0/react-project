import React from 'react'
import { Layout, Menu, Avatar, Row, Col } from 'antd';
import { Link, useNavigate } from 'react-router-dom';


const { Header } = Layout;


function HeaderComponent() {
    const navigate = useNavigate();
    
    const goHome = () => {
        navigate('/home');
    }
    return (
        <>
            <Header>
                <Row>
                    <Col span={2}>
                        <Avatar
                            size={'large'}
                            src='https://dgpays.com/images/dgpays-pictogram.png'
                            onClick={()=> goHome()}
                        />
                    </Col>
                    <Col span={20}>
                        <Menu
                            theme='dark'
                            mode='horizontal'
                            defaultSelectedKeys={['1']}>
                            <Menu.Item key={1}>
                                <Link to='/'>Login</Link>
                            </Menu.Item>
                            <Menu.Item key={2}>
                                <Link to='/customers'>Customers</Link>
                            </Menu.Item>
                            <Menu.Item key={3}></Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        </>
    )
}

export default HeaderComponent