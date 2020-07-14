import React, { useState, useEffect } from "react";
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
  CustomInput,
} from "reactstrap";
import { connector } from "../../constants";

const TransferSameBank = () => {
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const [reminderName, setReminderName] = useState();
  const [reminderNameSave, setReminderNameSave] = useState("");
  const [transferer, setTransferer] = useState("");
  const [transfer_amount, setTransferAmount] = useState("");
  const [receiver, setReceiver] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [amount, setAmount] = useState("");
  const [content, setContent] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [payFee, setPayFee] = useState("tranferer");
  const [activeTab, setActiveTab] = useState(0);
  const [trueOtp, setTrueOtp] = useState(0);
  const getReminderName = async () => {
    const user_id = localStorage.getItem("userId");
    const response = connector
      .post("/customers/getReceiverList", {
        user_id: user_id,
        bank_code: "TUB",
      })
      .then(
        (response) => {
          console.log("response3", response.rows);
          setReminderName(response.rows);
          //
        },
        (error) => {
          console.log("err123", error.response);
        }
      );
  };

  const getInfoAccount = async () => {
    const username = localStorage.getItem("username");
    console.log("username", username);
    const response = connector
      .post("/customers/getAccount", {
        username: username,
      })
      .then(
        (response) => {
          console.log("response", response);
          setTransferer(response.checking_account_number);
          setTransferAmount(response.checking_account_amount);
        },
        (error) => {
          console.log("err123", error.response);
        }
      );
  };

  useEffect(() => {
    getInfoAccount();
  }, []);
  useEffect(() => {
    getReminderName();
  }, []);

  const getReceiverName = async () => {
    connector
      .post("/accounts/PPNBankDetail", {
        bank_code: "PPNBank",
        account_number: receiver,
      })
      .then(
        (response) => {
          console.log("response", response);
          setReceiverName(response.name);
          console.log("recei1", receiverName);
        },
        (error) => {
          setReceiverName("Tên người hưởng");
          console.log("err : ", error.response);
        }
      );
    console.log("recei2", { receiverName });
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
    if (checked == true) {
      if (reminderNameSave == "") {
        reminderNameSave = receiverName;
      }
    }
    console.log("trueotp", trueOtp);
    if (trueOtp == otpCode) {
      connector
        .post("/customers/transferSameBank", {
          transferer: transferer,
          receiver: receiver,
          amount: amount,
          content: content,
          payFee: payFee,
          reminder: reminderNameSave,
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
                        <CustomInput
                          type="select"
                          name="customSelect"
                          id="exampleSelectMulti"
                          onChange={(e) => setReminderName(e.target.value)}
                          onBlur={getReminderName}
                        >
                          <option selected value="0"></option>
                          {reminderName != null ? (
                            reminderName.map((item) => (
                              <option value={item.reminder_account_number}>
                                {item.name_reminiscent}
                              </option>
                            ))
                          ) : (
                            <option></option>
                          )}
                        </CustomInput>
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
                        <Label>{receiverName} </Label>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col xs="12" md="3">
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="checkbox"
                              id="checkbox2"
                              checked={checked}
                              onChange={() => setChecked(!checked)}
                            />{" "}
                            Lưu thông tin người hưởng
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    {checked != false ? (
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Tên viết tắt</Label>
                        </Col>
                        <Col xs="12" md="3">
                          <Input
                            value={reminderNameSave}
                            onChange={(e) =>
                              setReminderNameSave(e.target.value)
                            }
                            type="text"
                            name="text-input"
                            on
                          />
                        </Col>
                      </FormGroup>
                    ) : (
                      ""
                    )}
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
                        <Label>{receiverName} </Label>
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
