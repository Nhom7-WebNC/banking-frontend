import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
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
const ACCESS_TOKEN_SECRET =
  "ac19786d39c8aad823211c351d9f59b8f275b2853239761f5ec12bf0e360cbe0c769ed65349c14286603173fb2909455ae26b09249375b353eda4c37d3a69f82";
const jwt = require("../../../node_modules/jsonwebtoken");
export const Login = () => {
  //console.log(props);
  const recaptchaRef = React.createRef();
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const login = () => {
    //console.log('submit')
    const response = connector
      .post("/login", {
        username,
        password,
      })
      .then(
        (response) => {
          console.log("response", response);
          const { accessToken } = response.data;

          localStorage.setItem("token", accessToken);
          if (accessToken) {
            jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (err, user) => {
              const username = user.name;
              localStorage.setItem("username", username);
              const password = user.password;

              if (user.role_name == "employee") {
                history.push("/employee");
              } else if (user.role_name == "customer") {
                history.push("/customer");
              } else if (user.role.name == "admin") {
                history.push("/admin");
              }
            });
          }
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
                  {/* <Form onSubmit={login}> */}

                  <Form>
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
                    <InputGroup className="mb-3">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        size="invisible"
                        sitekey="6LdRZasZAAAAAEPiIxNvmczM46JcEQgv8fvxQxy2"
                        onChange={value => console.log(value)}
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button
                          onClick={login}
                          //  type="submit"
                          color="primary"
                          className="px-4"
                        >
                          Đăng nhập
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">
                          Quên mật khẩu?
                        </Button>
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