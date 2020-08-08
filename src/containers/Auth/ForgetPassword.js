import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  Col,
  Input,
  Row,
  TabContent,
  TabPane,
  Alert,
  CardGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Container,
} from "reactstrap";
import { connector } from "../../constants";

export const ForgetPassword = () => {
  const visible = useState(false);
  const [username, setUsername] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(0);
  const [trueOtp, setTrueOtp] = useState(0);

  const sendOTP_username = async () => {
    // if (checked == true && reminderNameSave == "") {
    //   setReminderNameSave(receiverName);
    // }
    if (visible != true) {
      setActiveTab(1);

      connector
        .post("/sendOTP_username", {
          username,
        })
        .then(
          (response) => {
            console.log("email ok");
            console.log(response.msg);
            setTrueOtp(response.msg);
          },
          (error) => {
            console.log("email lỗi");
          }
        );
    }
  };

  const submit = async () => {
    console.log("trueotp", trueOtp);
    if (trueOtp == otpCode && visible != true) {
      const otp = trueOtp;
      connector
        .post("/auth/forgotPassword", {
          username,
          otp,
        })
        .then(
          (response) => {
            alert("Mời bạn đăng nhập lại")
            history.push("/login");

            console.log("response", response);
          },
          (error) => {
            console.log("submit lỗi khi connector post");
          }
        );
    } else {
      Alert("Sai mã otp");
    }
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12">
          <TabContent activeTab={activeTab}>
            <TabPane tabId={0}>
              <div className="app flex-row align-items-center">
                <Container>
                  <Row className="justify-content-center">
                    <Col md="8">
                      <CardGroup>
                        <Card className="p-4">
                          <CardBody>
                            <h1>Quên mật khẩu</h1>
                            <p className="text-muted">
                              Nhập tên đăng nhập của bạn
                            </p>
                            {/* <Alert color="danger" isOpen={visible}>
                              {error}
                            </Alert> */}
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-user"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              {/* <Input type="text" placeholder="Tên đăng nhập" /> */}
                              <Input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                name="text-input"
                                placeholder="Tên đăng nhập"
                              />
                            </InputGroup>

                            <Row>
                              <Col xs="12">
                                <Button
                                  onClick={sendOTP_username}
                                  type="submit"
                                  color="primary"
                                  className="px-4"
                                >
                                  Gửi mã xác nhận tới email đã đăng ký
                                </Button>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <Card
                          className="text-white bg-primary py-5 d-md-down-none"
                          style={{ width: "44%" }}
                        >
                          <CardBody className="text-center">
                            <div>
                              <h2>Đăng kí</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                              <Link to="/register">
                                <Button
                                  color="primary"
                                  className="mt-3"
                                  active
                                  tabIndex={-1}
                                >
                                  Đăng kí ngay!
                                </Button>
                              </Link>
                            </div>
                          </CardBody>
                        </Card>
                      </CardGroup>
                    </Col>
                  </Row>
                </Container>
              </div>
            </TabPane>
            <TabPane tabId={1}>
              <div className="app flex-row align-items-center">
                <Container>
                  <Row className="justify-content-center">
                    <Col md="8">
                      <CardGroup>
                        <Card className="p-4">
                          <CardBody>
                            <h1>Quên mật khẩu</h1>

                            {/* <Alert color="danger" isOpen={visible}>
                              {error}
                            </Alert> */}
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-user"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                readOnly
                                value={username}
                                type="text"
                                placeholder="Tên đăng nhập"
                              />
                            </InputGroup>

                            <p className="text-muted">
                              Nhập mã xác nhận đã gửi đến email của bạn
                            </p>

                            <InputGroup className="mb-4">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-lock"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              {/* <Input type="text" placeholder="Mã xác nhận" /> */}
                              <Input
                                value={otpCode}
                                onChange={(e) => setOtpCode(e.target.value)}
                                type="text"
                                name="text-input"
                              />
                            </InputGroup>
                            <Row>
                              <Col xs="6">
                                <Button
                                  onClick={submit}
                                  color="primary"
                                  className="px-4"
                                >
                                  Xác nhận
                                </Button>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <Card
                          className="text-white bg-primary py-5 d-md-down-none"
                          style={{ width: "44%" }}
                        >
                          <CardBody className="text-center">
                            <div>
                              <h2>Đăng kí</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                              <Link to="/register">
                                <Button
                                  color="primary"
                                  className="mt-3"
                                  active
                                  tabIndex={-1}
                                >
                                  Đăng kí ngay!
                                </Button>
                              </Link>
                            </div>
                          </CardBody>
                        </Card>
                      </CardGroup>
                    </Col>
                  </Row>
                </Container>
              </div>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </div>
  );
};

export default ForgetPassword;
