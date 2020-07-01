import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Label,
    Row,
} from "reactstrap";

import { connector } from "../../constants";
const ACCESS_TOKEN_SECRET =
    "ac19786d39c8aad823211c351d9f59b8f275b2853239761f5ec12bf0e360cbe0c769ed65349c14286603173fb2909455ae26b09249375b353eda4c37d3a69f82";
const jwt = require("../../../node_modules/jsonwebtoken");

export const InfoAccount = () => {

    //-----------------------------------------------
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState("");
    const [AccountNumber, setAccountNumber] = useState("");
    const [Amount, setAmount] = useState("");

    // useEffect(() => {
    //     const fetchAccount = async () => {}
    //     }, []);

    const infoAccount = () => {
        //console.log('submit')
        var username = localStorage.getItem("username");
        const response = connector.get("/customers/infoAccount", {
            username,
        }).then((response) => {
            //console.log("response", response);
            const data = response.data;

            if (data) {
                const AccountNumber = data.checking_account_number;
                const Amount = data.checking_account_amount;
                console.log(AccountNumber);
            }
        },
            (error) => {
                console.log("err123", error.response);
                setError(error.response.data.msg);
                setVisible(true);
            }
        );
    };

    //-----------------------------------------------

    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12">
                    <Card>
                        <Form
                            action=""
                            method="post"
                            encType="multipart/form-data"
                            className="form-horizontal"
                        >
                            <CardHeader>
                                <strong>Thông tin người hưởng</strong>
                            </CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="text-input">Số tài khoản</Label>
                                    </Col>
                                    <Col xs="12" md="3">
                                        <Label htmlFor="text-input">Hiện Số tài khoản</Label>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="6" md="3">
                                        <Label htmlFor="text-input">Số dư tài khoản</Label>
                                    </Col>
                                    <Col xs="12" md="3">
                                        <Label htmlFor="text-input">Hiện Số dư tài khoản</Label>
                                    </Col>
                                </FormGroup>
                            </CardBody>




                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

