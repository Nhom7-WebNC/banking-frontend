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
const ACCESS_TOKEN_SECRET =
  "ac19786d39c8aad823211c351d9f59b8f275b2853239761f5ec12bf0e360cbe0c769ed65349c14286603173fb2909455ae26b09249375b353eda4c37d3a69f82";

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
