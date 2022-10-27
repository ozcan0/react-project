import { Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import CustomerUpdate from "../Components/Customer/CustomerUpdate";

function CustomersPage() {
    return (
        <>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <CustomerUpdate />
                </Col>
                <Col span={2}></Col>
            </Row>
        </>
    )
}

export default CustomersPage