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

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();


  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <CardGroup>
              <Card className="p-4">
                <CardBody>

                  <Form>
                    <h1>Đổi mật khẩu</h1>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input readOnly
                        value="username1231214234"
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
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
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
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
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
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                      />
                      ,
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button
                          // onClick={login}
                          type="submit"
                          color="primary"
                          className="px-4"
                        >
                          Xác nhận
                        </Button>
                      </Col>

                    </Row>
                  </Form>
                </CardBody>
              </Card>

            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div >
  );
};
