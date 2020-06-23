import React, { useState } from "react";
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

const TransferSameBank = () => {
  const [transferer, setTransferer] = useState("3000001");
  const [receiver, setReceiver] = useState("12345678");
  const [amount, setAmount] = useState(4000);
  const [content, setContent] = useState("String");
  const [payFee, setPayFee] = useState("tranferer");

  const submit = async () => {
    const { data } = await connector.post("/customers/transfer", {
      transferer,
      receiver,
      amount,
      content,
      payFee,
    });
    console.log(data);
  };

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
                    <Input
                      value={transferer}
                      onChange={(e) => setTransferer(e.target.value)}
                      type="text"
                      name="text-input"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Tên người hưởng</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <Input
                      value={receiver}
                      onChange={(e) => setReceiver(e.target.value)}
                      type="text"
                      name="text-input"
                    />
                  </Col>
                </FormGroup>
              </CardBody>

              <CardHeader>
                <strong>Thông tin giao dịch</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Số tiền chuyển</Label>
                  </Col>
                  <Col md="3">
                    <Input
                      value={amount}
                      onChange={(e) => setAmount(parseInt(e.target.value))}
                      type="number"
                      name="text-input"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Nội dung chuyển tiền</Label>
                  </Col>
                  <Col xs="6" md="3">
                    <Input
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      type="text"
                      name="text-input"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Phí chuyển tiền</Label>
                  </Col>
                  <Col md="3">
                    <Input
                      value={payFee}
                      onChange={(e) => setPayFee(e.target.value)}
                      type="text"
                      name="text-input"
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={() => submit()}
                  type="submit"
                  size="sm"
                  color="primary"
                  className="mx-2 px-5"
                >
                  <i className="fa fa-dot-circle-o"></i> Xác nhận
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TransferSameBank;
