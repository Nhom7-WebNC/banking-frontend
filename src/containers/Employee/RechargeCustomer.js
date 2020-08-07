import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { connector } from "../../constants";

const RechargeCustomer = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const Recharge = async (e) => {
    e.preventDefault();
    try {
      const { msg } = await connector.post("/employee/recharge", {
        accountNumber,
        amount,
      });
      alert(msg);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12">
          <Card>
            <Form onSubmit={Recharge}>
              <CardHeader>
                <strong>Nạp tiền vào tài khoản</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Số tài khoản</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      type="number"
                      name="text-input"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Số tiền</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      type="number"
                      name="text-input"
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  className="mx-2 px-5"
                >
                  <i className="fa fa-dot-circle-o"></i> Nạp tiền
                </Button>
                
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RechargeCustomer;
