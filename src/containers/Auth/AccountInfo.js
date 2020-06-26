import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
const ACCESS_TOKEN_SECRET =
  "ac19786d39c8aad823211c351d9f59b8f275b2853239761f5ec12bf0e360cbe0c769ed65349c14286603173fb2909455ae26b09249375b353eda4c37d3a69f82";
const jwt = require("../../../node_modules/jsonwebtoken");

 const AccountInfo = () => {
  //   const [password, setPassword] = useState("");
  //   const [username, setUsername] = useState("");
  // //   const history = useHistory();
  // //   const login = async () => {
  // //     const { accessToken } = data;
  // const accessToken = localStorage.getItem("token");
  // if (accessToken) {
  //   jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (err, user) => {
  //       setUsername(user.username);
  //   });
  // }
  // const { data } = await connector.post("/login", {
  //   username  });
  // };
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
                <strong>Thông tin cá nhân</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Họ và tên</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" name="text-input" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Email</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" name="text-input" />
                    {/* <FormText color="danger">Email không hợp lệ</FormText> */}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Số điện thoại</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" name="text-input" />
                    {/* <FormText color="danger">
                    Số điện thoại không hợp lệ
                  </FormText> */}
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  className="mx-2 px-5"
                >
                  <i className="fa fa-dot-circle-o"></i> Lưu
                </Button>
                <Button
                  type="reset"
                  size="sm"
                  color="danger"
                  className="mx-2 px-5"
                >
                  <i className="fa fa-ban"></i> Tạo lại
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default AccountInfo;
