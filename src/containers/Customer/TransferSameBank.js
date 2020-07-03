import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  TabContent,
  TabPane,
} from "reactstrap";
import { connector } from "../../constants";

const TransferSameBank = () => {
  const history = useHistory();

  const [transferer, setTransferer] = useState("3000001");
  const [transfer_amount, setTransferAmount] = useState("100000");
  const [transfer_name, setTransferName] = useState("Phong");
  const [receiver, setReceiver] = useState("230500002");
  const [receiver_name, setReceiverName] = useState("cc");
  const [amount, setAmount] = useState(4000);
  const [content, setContent] = useState("Chuyen tien cho ai");
  const [otpCode, setOtpCode] = useState("");

  const [payFee, setPayFee] = useState("tranferer");
  const [activeTab, setActiveTab] = useState(0);
  const [trueOtp, setTrueOtp] = useState(0);
  // const getNameReceiver = async () => {

  // };
  const getReceiverName = async () => {
    connector
      .post("/accounts/PPNBankDetail", {
        bank_code: "PPNBank",
        account_number: receiver,
      })
      .then(
        (response) => {
          console.log("response", response);
          setReceiverName(response.data.name);
          console.log("recei1", receiver_name);
        },
        (error) => {
          setReceiverName("Tên người hưởng");
          console.log("err : ", error.response);
        }
      );
    console.log("recei2", { receiver_name });
  };
  const sendOTP = async () => {
    setActiveTab(1);
    connector
      .post("/customers/sendOTP", {
        account_number: transferer,
      })
      .then(
        (response) => {
          console.log("email oke");
          console.log(response.data.msg);
          setTrueOtp(response.data.msg);
        },
        (error) => {
          console.log("email loi");
        }
      );
  };
  const submit = async () => {
    console.log("trueotp", trueOtp);
    if (trueOtp == otpCode) {
      connector
        .post("/customers/transferSameBank", {
          transferer: transferer,
          receiver: receiver,
          amount: amount,
          content: content,
          payFee: payFee,
        })
        .then(
          (response) => {
            history.push("/employee");

            console.log("response", response);
          },
          (error) => {
            console.log("submit loi khi connector post");
          }
        );
    } else {
      console.log("loi submit sai otp code");
    }
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12">
          <TabContent activeTab={activeTab}>
            <TabPane tabId={0}>
              <Card>
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CardHeader>
                    <strong>Thông tin người chuyển tiền</strong>
                  </CardHeader>
                  <CardBody>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Tài khoản nguồn</Label>
                      </Col>
                      <Col xs="12" md="3">
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelectMulti"
                        >
                          <option selected>{transferer}</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Số dư khả dụng</Label>
                      </Col>
                      <Col xs="12" md="3">
                        <Label>{transfer_amount} VNĐ</Label>
                      </Col>
                    </FormGroup>
                  </CardBody>

                  <CardHeader>
                    <strong>Thông tin người hưởng</strong>
                  </CardHeader>
                  <CardBody>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Tìm kiếm</Label>
                      </Col>
                      <Col xs="6" md="3">
                        <Input
                          placeholder="Nhập tên, tên gợi nhớ"
                          type="text"
                          name="text-input"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Số tài khoản</Label>
                      </Col>
                      <Col xs="12" md="3">
                        <Input
                          value={receiver}
                          onChange={(e) => setReceiver(e.target.value)}
                          onBlur={getReceiverName}
                          type="text"
                          name="text-input"
                          on
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Tên người hưởng</Label>
                      </Col>
                      <Col xs="12" md="3">
                        <Label>{receiver_name} </Label>
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
                      <Col xs="6" md="3">
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelectMulti"
                          onChange={(e) => setPayFee(e.target.value)}
                        >
                          <option selected value="transferer">
                            Người chuyển trả
                          </option>
                          <option value="receiver">Người hưởng trả</option>
                        </Input>
                      </Col>
                    </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <Button
                      onClick={sendOTP}
                      size="sm"
                      color="primary"
                      className="mx-2 px-5"
                    >
                      <i className="fa fa-dot-circle-o"></i> Xác nhận
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </TabPane>
            <TabPane tabId={1}>
              <Card style={{ height: "44%" }}>
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CardHeader>
                    <strong>Thông tin người chuyển tiền</strong>
                  </CardHeader>
                  <CardBody>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Tài khoản nguồn</Label>
                      </Col>
                      <Col xs="12" md="3">
                        <Label>{transferer}</Label>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Số dư khả dụng</Label>
                      </Col>
                      <Col xs="12" md="3">
                        <Label>{transfer_amount} VNĐ</Label>
                      </Col>
                    </FormGroup>
                  </CardBody>

                  <CardHeader>
                    <strong>Thông tin người hưởng</strong>
                  </CardHeader>
                  <CardBody>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Số tài khoản</Label>
                      </Col>
                      <Col xs="12" md="3">
                        <Label>{receiver}</Label>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Tên người hưởng</Label>
                      </Col>
                      <Col xs="12" md="3">
                        <Label>{receiver_name} </Label>
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
                        <Label>{amount}</Label>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Nội dung chuyển tiền</Label>
                      </Col>
                      <Col xs="6" md="3">
                        <Label>{content}</Label>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Phí chuyển tiền</Label>
                      </Col>
                      <Col xs="6" md="3">
                        <Label>Người chuyển trả</Label>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3"></Col>
                      <Col md="9">
                        <Label htmlFor="text-input">
                          Mã giao dịch (OTP) đã được gửi đến điện thoại của quý
                          khách!
                        </Label>
                      </Col>
                      <Col md="3">
                        <Label htmlFor="text-input">Nhập mã OTP</Label>
                      </Col>
                      <Col xs="12" md="3">
                        <Input
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value)}
                          type="text"
                          name="text-input"
                        />
                      </Col>
                    </FormGroup>
                  </CardBody>

                  <CardFooter>
                    <Button
                      onClick={submit}
                      size="sm"
                      color="primary"
                      className="mx-2 px-5"
                    >
                      <i className="fa fa-dot-circle-o"></i> Xác nhận
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </div>
  );
};

export default TransferSameBank;
