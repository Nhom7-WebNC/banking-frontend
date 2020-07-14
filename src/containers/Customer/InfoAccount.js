import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Label,
} from "reactstrap";

import { connector } from "../../constants";

export const InfoAccount = () => {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const [accountNumber, setAccountNumber] = useState("123456");
  const [amount, setAmount] = useState("abcdef");
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const getInfoAccount = async () => {
    const response = connector
      .post("/customers/getAccount", {
        username,
      })
      .then(
        (response) => {
          console.log("response", response.data);
          setAccountNumber(response.data.accounts[0].checking_account_number);
          setAmount(response.data.accounts[0].checking_account_amount);
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
              <Label htmlFor="text-input">Số tài khoản</Label>
            </Col>
            <Col md="3">
              <Label htmlFor="text-input">{accountNumber}</Label>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Số dư</Label>
            </Col>
            <Col md="3">
              <Label htmlFor="text-input">{amount}</Label>
            </Col>
          </FormGroup>
          {/* <FormGroup row>
            <Button
              onClick={getInfoAccount}
              //  type="submit"
              color="primary"
              className="px-4"
            >
              Đăng nhập
                        </Button>
          </FormGroup> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default InfoAccount;
