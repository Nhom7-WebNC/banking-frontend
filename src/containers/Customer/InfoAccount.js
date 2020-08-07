import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

import { connector } from "../../constants";

export const InfoAccount = () => {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const getInfoAccount = async () => {
    const response = connector
      .post("/customers/getAccount", {
        username,
      })
      .then(
        (response) => {
          console.log("response", response.data);
          setAccountNumber(response.checking_account_number);
          setAmount(response.checking_account_amount);
        },

        (error) => {
          console.log("err123", error.response);
          setError(error.response.data.msg);
          setVisible(true);
        }
      );
  };

  useEffect(() => {
    getInfoAccount();
  }, []);
  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          <strong>Thông tin tài khoản</strong>
        </CardHeader>

        <CardBody>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">
                <b>Số tài khoản</b>
              </Label>
            </Col>
            <Col xs="12" md="3">
              {/* <Label htmlFor="text-input" readOnly>{accountNumber}</Label> */}
              <Input value={accountNumber} readOnly></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">
                <b>Số dư khả dụng</b>
              </Label>
            </Col>
            <Col xs="12" md="3">
              {/* <Label htmlFor="text-input" readOnly>{amount}</Label> */}
              <Input value={amount} readOnly></Input>
            </Col>
          </FormGroup>
        </CardBody>
      </Card>
    </div>
  );
};

export default InfoAccount;
