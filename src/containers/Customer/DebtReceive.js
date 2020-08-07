import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Row,
  Table,
  CardBody,
  CardHeader,
  Button,
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

const DebtCreate = (props) => {
  const [messageDebt, setMessageDebt] = useState();

  const [unmountOnClose, setUnmountOnClose] = useState(true);
  const { buttonLabel, className } = props;
  const [loading, setLoading] = useState(false);
  const [trueOtp, setTrueOtp] = useState(0);
  const [otpCode, setOtpCode] = useState("");

  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const [todos, setDataTable] = useState();
  const [idSelect, setIdSelect] = useState();
  const [ModalTitle, setModalTitle] = useState("Hủy nhắc nợ");
  const [modal, setModal] = useState(false);

  const toggle = (id) => {
    setIdSelect(id);
    setModal(!modal);
  };

  const [modal2, setModal2] = useState(false);

  const toggle2 = (id) => {
    setIdSelect(id);
    setModal2(!modal2);
  };

  const sender = localStorage.getItem("accountNumber");

  const payDebt = (id) => {
    console.log("trueotp", trueOtp);
    if (trueOtp == otpCode) {
      setLoading(true);

      const response = connector
        .post("/customers/pay-debt", {
          id: idSelect,
        })
        .then(
          (response) => {
            console.log("response", response);
            setError("");
            setModal(!modal);
            setLoading(false);
            window.location.reload();
          },
          (error) => {
            console.log("err", error.response);
            setError("");
            setModal(!modal);
            setLoading(false);
          }
        );
    }
  };

  const sendOTP = async () => {
    connector
      .post("/customers/sendOTP", {
        account_number: sender,
      })
      .then(
        (response) => {
          console.log("email oke");
          console.log(response.msg);
          setTrueOtp(response.msg);
        },
        (error) => {
          console.log(error.response.msg);
        }
      );
  };
  const getDebt = () => {
    // setLoading(true);
    const response = connector
      .post("/customers/get-debt", {
        account_number: sender,
      })
      .then(
        (response) => {
          setError("");
          setDataTable(response.data);
          console.log(response.data);
        },
        (error) => {
          console.log("err123", error.response);
          setError(error.response.msg);
          setDataTable();
        }
      );
  };
  const cancelDebt = (id) => {
    setLoading(true);
    const response = connector
      .post("/customers/cancel-debt", {
        id: idSelect,
        type: 1,
        message: messageDebt,
      })
      .then(
        (response) => {
          console.log("response", response);
          setError("");
          setModal(!modal);
          setLoading(false);
          window.location.reload();
        },
        (error) => {
          console.log("err123", error.response);
          setError("");
          setModal(!modal);
          setLoading(false);
        }
      );
  };
  useEffect(() => {
    getDebt();
  }, []);
  return (
    <div className="animated fadeIn">
      <Modal
        isOpen={loading}
        toggle={toggle2}
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
        isOpen={modal2}
        toggle={toggle2}
        className={className}
        unmountOnClose={unmountOnClose}
      >
        <ModalHeader toggle={toggle2}>Thanh toán nhắc nợ</ModalHeader>
        <ModalBody>
          <Form>
            <Alert color="danger" isOpen={visible}>
              {error}
            </Alert>
            <CardHeader>
              <strong>Thanh toán nhắc nợ</strong>
            </CardHeader>
            <CardBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Nhập mã otp để thanh toán</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    name="text-input"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                  />
                </Col>
              </FormGroup>
            </CardBody>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => payDebt({ idSelect })}>
            Thanh toán nhắc nợ
          </Button>{" "}
          <Button color="secondary" onClick={toggle2}>
            Quay về
          </Button>
        </ModalFooter>
      </Modal>

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
          <Form>
            <Alert color="danger" isOpen={visible}>
              {error}
            </Alert>
            <CardHeader>
              <strong>Hủy nhắc nợ</strong>
            </CardHeader>
            <CardBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Lí do hủy nhắc nợ</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    name="text-input"
                    value={messageDebt}
                    onChange={(e) => setMessageDebt(e.target.value)}
                  />
                </Col>
              </FormGroup>
            </CardBody>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => cancelDebt({ idSelect })}>
            Hủy nhắc nợ
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Quay về
          </Button>
        </ModalFooter>
      </Modal>

      <Card>
        <CardHeader>
          <strong>Nhắc nợ đã nhận</strong>
        </CardHeader>

        <CardBody>
          <Row>
            <Col>
              <Table responsive bordered>
                <thead>
                  <tr>
                    <th>Mã giao dịch</th>
                    <th>Số tài khoản</th>
                    <th>Số tiền</th>
                    <th>Nội dung</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {todos != null ? (
                    todos.activeTab1.map((todo) => (
                      <tr>
                        <td>{todo.id}</td>
                        <td>{todo.creditor_account_number}</td>
                        <td>{todo.amount}</td>
                        <td>{todo.message}</td>
                        <td>{todo.status}</td>
                        <td>
                          <Button
                            // onClick={() => deleteReceiver(todo.id)}
                            color="danger"
                            onClick={() => {
                              toggle2(todo.id);
                              sendOTP();
                            }}
                          >
                            THANH TOÁN
                          </Button>
                          &ensp;
                          <Button
                            color="danger"
                            onClick={() => toggle(todo.id)}
                          >
                            XÓA
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <Button color="danger">THANH TOÁN </Button>
                        &ensp;
                        <Button color="danger" onclick={toggle}>
                          XÓA{" "}
                        </Button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default DebtCreate;
