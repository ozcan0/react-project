import { Table, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import CustomerDetail from "../Components/Customer/CustomerDetail";

function CustomersDetail() {
    return (
        <>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <CustomerDetail />
                </Col>
                <Col span={2}></Col>
            </Row>
        </>
    )
}

export default CustomersDetail