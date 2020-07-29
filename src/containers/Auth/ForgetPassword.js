import React, { useState, useEffect } from "react";
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
// import { connector } from "../../constants";

export const ForgetPassword = () => {

    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);

    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12">

                    <TabContent activeTab={1}>
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
                                                                type="text"
                                                                placeholder="Tên đăng nhập"
                                                            />
                                                        </InputGroup>


                                                        <Row>
                                                            <Col xs="12">
                                                                <Button
                                                                    // onClick={login}
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
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                                aliqua.
                                                            </p>
                                                            <Button
                                                                color="primary"
                                                                className="mt-3"
                                                                active
                                                                tabIndex={-1}
                                                            >
                                                                Đăng kí ngay!
                                                </Button>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </CardGroup>
                                        </Col>
                                    </Row>
                                </Container>
                            </div >
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

                                                        <Alert color="danger" isOpen={visible}>
                                                            {error}
                                                        </Alert>
                                                        <InputGroup className="mb-4">
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="icon-user"></i>
                                                                </InputGroupText>
                                                                 <InputGroupText>
                                                                Username11111111111111
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                           
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
                                                            <Input
                                                                type="text"
                                                                placeholder="Mã xác nhận"
                                                            />
                                        </InputGroup>
                                                        <Row>
                                                            <Col xs="6">
                                                                <Button
                                                                    type="submit"
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
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                                aliqua.
                                            </p>
                                                            <Button
                                                                color="primary"
                                                                className="mt-3"
                                                                active
                                                                tabIndex={-1}
                                                            >
                                                                Đăng kí ngay!
                                                </Button>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </CardGroup>
                                        </Col>
                                    </Row>
                                </Container>
                            </div >
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </div>
    );
};

export default ForgetPassword;
