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
    Alert,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from "reactstrap";

export const ChangePassword = () => {
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);
    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12">
                    <Card>
                        <Alert color="danger" isOpen={visible}>
                            {error}
                        </Alert>
                        <Form
                            action=""
                            method="post"
                            encType="multipart/form-data"
                            className="form-horizontal"
                        >
                            <CardHeader>
                                <strong>Đổi mật khẩu</strong>
                            </CardHeader>
                            <CardBody>
                                {/* <InputGroup className="mb-4">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="icon-user"></i>
                                        </InputGroupText>
                                        <InputGroupText>
                                            Username11111111111111
                                                                </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup> */}
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="text-input">Tên truy cập</Label>
                                    </Col>
                                    <Col md="3">
                                        <InputGroupText> Username11111111111111</InputGroupText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="text-input">Mật khẩu hiện tại</Label>
                                    </Col>
                                    <Col md="3">
                                        <Input
                                            type="text"
                                            name="text-input"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="text-input">Mật khẩu mới</Label>
                                    </Col>
                                    <Col xs="6" md="3">
                                        <Input
                                            type="password"
                                            name="text-input"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="text-input">Nhập lại mật khẩu</Label>
                                    </Col>
                                    <Col xs="6" md="3">
                                        <Input
                                            type="password"
                                            name="text-input"
                                        />
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button
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

export default ChangePassword;
