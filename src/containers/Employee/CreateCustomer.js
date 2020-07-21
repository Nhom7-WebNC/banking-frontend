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
  Alert,
} from "reactstrap";
import { connector } from "../../constants";

const CreateCustomer = () => {
  const [username, setUsername] = useState("abc");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("Nam");
  const [personal_number, setPersonal_number] = useState("");

  const [error, setError] = useState("ssss");
  const [visible, setVisible] = useState(false);

  const createCustomer = () => {
    console.log(birthday);
    const response = connector
      .post("/employee/create-account", {
        username,
        password,
        name,
        phone_number,
        email,
        birthday,
        address,
        gender,
        personal_number,
        role_name: "customer",
      })
      .then(
        (response) => {
          console.log("response", response.data);
        },
        (error) => {
          console.log("err123", error.response);
          setError(error.response.data.msg);
          setVisible(true);
        }
      );
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12">
          <Card>
            <Form
            // onSubmit={handleSubmit(onSubmit)}
            // action=""
            // method="post"
            // encType="multipart/form-data"
            // className="form-horizontal"
            >
              <Alert color="danger" isOpen={visible}>
                {error}
              </Alert>
              <CardHeader>
                <strong>Thông tin đăng nhập</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Tên đăng nhập</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="text"
                      name="text-input"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Mật khẩu</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="password"
                      name="text-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>

              <CardHeader>
                <strong>Thông tin cá nhân</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Họ và tên</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="text"
                      name="text-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Số điện thoại</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="text"
                      name="text-input"
                      value={phone_number}
                      onChange={(e) => setPhone_number(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Email</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="email"
                      name="text-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Ngày sinh</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="date"
                      name="text-input"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Địa chỉ</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="text"
                      name="text-input"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Giới tính</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelectMulti"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option selected value="Nam">
                        Nam
                      </option>
                      <option value="Nữ">Nữ</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Chứng minh nhân dân</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="text"
                      name="text-input"
                      value={personal_number}
                      onChange={(e) => setPersonal_number(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button
                  size="sm"
                  color="primary"
                  className="mx-2 px-5"
                  onClick={createCustomer}
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

export default CreateCustomer;
