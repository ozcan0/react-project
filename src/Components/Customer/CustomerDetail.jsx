import { Card } from 'antd';
import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import {networkServices} from "../../api/axios";

function CustomerDetail() {

    let {id} = useParams();

    const [customer, setCustomer] = useState({});

    useEffect(() => {
        networkServices.getById('customers', id)
            .then(data => {
                setCustomer(data);
            })
    }, [])

    return (
        <>
            <Card
                title={customer.id}
                bordered={false}
                style={{
                    margin: "20px 0px",
                }}
            >
                <p>Company Name = {customer.companyName}</p>
                <p>Contact Name = {customer.contactName}</p>
                <p>Contact Title = {customer.contactTitle}</p>
            </Card>
        </>
    );
}

export default CustomerDetail;