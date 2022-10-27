import {Table, Row, Col, Button} from 'antd';
import React, { useEffect, useState } from 'react';
import CustomerList from "../Components/Customer/CustomerList";
import {Link} from "react-router-dom";

function CustomersPage() {
    return (
    <>
        <Row>
            <Col span={2}></Col>
            <Col span={20}>
                <Button style={{margin: "20px 0"}} type="primary" href="/customers/add">+</Button>
            </Col>
            <Col span={2}></Col>
        </Row>
        <Row>
            <Col span={2}></Col>
            <Col span={20}>
                <CustomerList />
            </Col>
            <Col span={2}></Col>
        </Row>
    </>
  )
}

export default CustomersPage