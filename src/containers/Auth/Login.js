import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Recaptcha from "react-recaptcha";
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
import { is } from "core-js/fn/object";

export const Login = () => {
  const recaptchaRef = React.createRef();

  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  

  
  
  const login = (e) => {
    e.preventDefault();
    const response = connector
      .post("/login", {
        username,
        password,
      })
      .then(
        (response) => {
        
            const { token, user, account_number } = response;
            localStorage.setItem("token", token);
            localStorage.setItem("username", user.username);
            localStorage.setItem("userId", user.id);
            localStorage.setItem("role", user.role);
            localStorage.setItem("accountNumber", account_number);

            if (user.role == "employee") {
              history.push("/employee");
            } else if (user.role == "customer") {
              history.push("/customer");
            } else if (user.role == "admin") {
              history.push("/admin");
            }
            // document.getElementById("captcha").innerHTML = "Captcha không đúng";

        },
        (error) => {
          console.log("err123", error.response);
          setError(error.response.data.msg);
          setVisible(true);
        }
      );
  };

  

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={login}>
                    <h1>Đăng nhập</h1>
                    <p className="text-muted">
                      Đăng nhập vào tài khoản của bạn
                    </p>
                    <Alert color="danger" isOpen={visible}>
                      {error}
                    </Alert>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Tên đăng nhập"
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Mật khẩu"
                      />
                      ,
                    </InputGroup>
                    {/* Recaptcha
                    <InputGroup className="mb-3">
                      <ReCAPTCHA
                        sitekey="6LdavrgZAAAAAAcfImSqzWvU9IDN4e2AyLHQxE4y"
                        render="explicit"
                        // onloadcallback={callback}
                        verifyCallback={this.verifyCallback}
                      />
                      <div id="captcha"></div>
                    </InputGroup> */}
                    <Row>
                      <Col xs="6">
                        <Button type="submit" color="primary" className="px-4">
                          Đăng nhập
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Link to="/forget-password">
                          <Button color="link" className="px-0">
                            Quên mật khẩu?
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Form>
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
  );
};
