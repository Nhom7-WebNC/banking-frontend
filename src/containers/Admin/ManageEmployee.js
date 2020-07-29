import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  ButtonToggle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup,
  Label,
  Alert,
  Spinner,
} from "reactstrap";

import { connector } from "../../constants";
import Moment from "moment";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ManageEmployee = (props) => {
  Moment.locale("vn");
  const [todos, setDataTable] = useState();
  const [error, setError] = useState("");

  ////define for form edit info modal
  const [username, setUsername] = useState("abc");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("Nam");
  const [personal_number, setPersonal_number] = useState("");
  const [id, setId] = useState("");

  const [visible, setVisible] = useState(false);
  //////////

  //define for modal

  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const changeUnmountOnClose = (e) => {
    let value = e.target.value;
    setUnmountOnClose(JSON.parse(value));
  };
  const [ModalTitle, setModalTitle] = useState();
  const toggle = (todo) => {
    setModal(!modal);
    setUsername(todo.username);
    setAddress(todo.address);
    setBirthday(todo.birthday);
    setEmail(todo.email);
    setName(todo.name);
    setPersonal_number(todo.personal_number);
    setGender(todo.gender);
    setPhone_number(todo.phone_number);

    setModalTitle(todo.name);
    setId(todo.id);
  };
  ///////

  ///define loading
  const [loading, setLoading] = useState(false);

  ////
  const getEmployee = () => {
    setLoading(true);
    const respon = connector.get("/admin/manage-employee", {}).then(
      (response) => {
        setError("");
        // console.log(response);
        setDataTable(response.data);
        setLoading(false);
      },
      (error) => {
        console.log("err123", error.response);
        setError(error.response.msg);
        setDataTable();
        setLoading(false);
      }
    );
  };

  ///update info employee
  const updateEmployee = () => {
    console.log("update....!!!!");
    setLoading(true);
    const respon = connector
      .post("/admin/update/", {
        username,
        password,
        name,
        phone_number,
        email,
        birthday,
        address,
        gender,
        personal_number,
        id,
      })
      .then(
        (response) => {
          setError("");
          setModal(!modal);
          setDataTable(response.data);
          setLoading(false);
        },
        (error) => {
          console.log("err123", error.response);
          setError(error.response.msg);
          setModal(!modal);
          setDataTable();
          setLoading(false);
        }
      );
  };
  useEffect(() => {
    getEmployee();
  }, []);

  const deleteEmployee = (id) => {
    setLoading(true);
    const abc = connector.get("/admin/delete/" + id, {}).then(
      (response) => {
        setError("");
        // console.log(response);
        setDataTable(response.data);
        setLoading(false);
      },
      (error) => {
        console.log("err123", error.response);
        setError(error.response.msg);
        setDataTable();
        setLoading(false);
      }
    );
  };

  return (
    <div className="animated fadeIn">
      <Modal
        isOpen={loading}
        toggle={toggle}
        className={className}
        unmountOnClose={unmountOnClose}
        style={{ backgroundColor: "gray", width: "15rem", height: "5rem" }}
      >
        <Button
          color="primary"
          disabled
          style={{ width: "15rem", height: "5rem" }}
        >
          <Spinner animation="grow" variant="info" />
          Loading...
        </Button>
      </Modal>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        unmountOnClose={unmountOnClose}
      >
        <ModalHeader toggle={toggle}>{ModalTitle}</ModalHeader>
        <ModalBody>
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
                    value={Moment(birthday).format("yyyy-MM-DD")}
                    // value = {birthday}
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
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Nam">Nam</option>
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
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => updateEmployee()}>
            Lưu
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Quay về
          </Button>
        </ModalFooter>
      </Modal>
      <Card>
        <CardHeader>
          <strong>Quản lý nhân viên</strong>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <Button
                // onClick={getEmployee}
                href="create-employee"
                size="sm"
                color="primary"
                className="mx-2 px-5"
                style={{ margin: 10 }}
              >
                THÊM
              </Button>
              <Table responsive bordered>
                <thead>
                  <tr>
                    <th>Họ tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {todos != null ? (
                    todos.map((todo) => (
                      <tr>
                        <td>{todo.name}</td>
                        <td>{todo.birthday}</td>
                        <td>{todo.gender}</td>
                        <td>{todo.address}</td>
                        <td>
                          <Button
                            onClick={() => deleteEmployee(todo.id)}
                            color="danger"
                          >
                            XOÁ{" "}
                          </Button>
                          &ensp;
                          <ButtonToggle
                            color="primary"
                            onClick={() => toggle(todo)}
                          >
                            SỬA
                          </ButtonToggle>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td></td>
                    </tr>
                  )}
                </tbody>
              </Table>
              <Pagination>
                <PaginationItem>
                  <PaginationLink previous tag="button">
                    Trước
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink tag="button">1</PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink tag="button">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink tag="button">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next tag="button">
                    Sau
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default ManageEmployee;
