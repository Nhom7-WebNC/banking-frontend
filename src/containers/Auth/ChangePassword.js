import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Alert,
  Row,
} from "reactstrap";
import { connector } from "../../constants";
// import { ForgetPassword } from "./ChangePassword"

export const ChangePassword = () => {
  //console.log(props);
  // const recaptchaRef = React.createRef();
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const [username] = useState(localStorage.getItem("username"));
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const history = useHistory();

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      const { msg } = await connector.post("/auth/changePassword", {
        username,
        oldPassword,
        newPassword,
        newPassword2,
      });
      alert(msg);
      history.push("/login");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={changePassword}>
                    <h1>Đổi mật khẩu</h1>
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

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        type="password"
                        placeholder="Mật khẩu hiện tại"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="password"
                        placeholder="Mật khẩu mới"
                      />
                      ,
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        value={newPassword2}
                        onChange={(e) => setNewPassword2(e.target.value)}
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                      />
                      ,
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button type="submit" color="primary" className="px-4">
                          Xác nhận
                        </Button>

                        {/* <Button type="submit" color="primary" className="px-4">
                          Hủy
                        </Button> */}
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
