import { Table, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import AddCustomer from "../Components/Customer/AddCustomer";

function CustomersAdd() {
    return (
        <>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <AddCustomer />
                </Col>
                <Col span={2}></Col>
            </Row>
        </>
    )
}

export default CustomersAdd