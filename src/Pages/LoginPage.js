import React from 'react'
import Login from '../Components/Login'

import { Space, Row, Col, } from 'antd';


function LoginPage() {
  return (
    <>
      <Row justify="space-around" align="middle">
          <Col >
              <Space align="center">
                  <Login />
              </Space>
          </Col>
      </Row>
    </>
  )
}

export default LoginPage