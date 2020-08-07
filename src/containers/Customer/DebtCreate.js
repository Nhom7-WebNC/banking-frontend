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
  const [receiver, setReceiver] = useState();
  const [idCancel, setIdCancel] = useState();
  const [ModalTitle2, setModalTitle2] = useState("Hủy nhắc nợ");
  const [modal2, setModal2] = useState(false);
  const [receiverName, setReceiverName] = useState();
  const [amount, setAmount] = useState();
  const [message, setMessage] = useState();
  const [messageDebt, setMessageDebt] = useState();

  const [todos, setDataTable] = useState();
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ModalTitle, setModalTitle] = useState("Tạo nhắc nợ");
  const [unmountOnClose, setUnmountOnClose] = useState(true);
  const { buttonLabel, className } = props;
  const sender = localStorage.getItem("accountNumber");
  const getReceiverName = async () => {
    connector
      .post("/accounts/PPNBankDetail", {
        bank_code: "PPNBank",
        account_number: receiver,
      })
      .then(
        (response) => {
          console.log("response", response);
          setReceiverName(response.name);
          console.log("recei1", receiverName);
          setVisible(false);
        },
        (error) => {
          console.log(error.response.data.msg);
          setReceiverName("Tên người hưởng");
          setError(error.response.data.msg);
          setVisible(true);
        }
      );
    console.log("recei2", { receiverName });
  };
  const cancelDebt = (id) => {
    setLoading(true);
    const response = connector
      .post("/customers/cancel-debt", {
        id: idCancel,
        type: 0,
        message: messageDebt,
      })
      .then(
        (response) => {
          console.log("response", response);
          setError("");
          setModal2(!modal2);
          setLoading(false);
          window.location.reload();
        },
        (error) => {
          console.log("err123", error.response);
          setError("");
          setModal2(!modal2);
          setLoading(false);
        }
      );
  };

  const createDebt = () => {
    setLoading(true);
    const response = connector
      .post("/customers/create-debt", {
        sender,
        receiver,
        amount,
        message,
      })
      .then(
        (response) => {
          setError("");
          setModal(!modal);
          // setDataTable(response.data);
          setLoading(false);
          setVisible(false);
          window.location.reload();
        },
        (error) => {
          console.log("err123", error.response);
          setError(error.response.data.msg);
          // setModal(!modal);
          setLoading(false);
          setVisible(true);
        }
      );
  };

  const getDebt = () => {
    // setLoading(true);
    const accountNumber = sender;
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
  useEffect(() => {
    getDebt();
  }, []);
  const [modal, setModal] = useState(false);
  const toggle = () => {
    console.log("toggle");
    setModal(!modal);
  };

  const toggle2 = (id) => {
    setIdCancel(id);
    setModal2(!modal2);
  };

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
        <ModalHeader toggle={toggle2}>{ModalTitle2}</ModalHeader>
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
          <Button color="primary" onClick={() => cancelDebt({ idCancel })}>
            Hủy nhắc nợ
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
              <strong>Tạo nhắc nợ</strong>
            </CardHeader>
            <CardBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Số tài khoản</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    name="text-input"
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value)}
                    onBlur={getReceiverName}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Tên người hưởng</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label>{receiverName} </Label>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Số tiền</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="number"
                    name="text-input"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Nội dung nhắc nợ</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    name="text-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Col>
              </FormGroup>
            </CardBody>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => createDebt()}>
            Gửi nhắc nợ
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Quay về
          </Button>
        </ModalFooter>
      </Modal>
      {/* index */}
      <Card>
        <CardHeader>
          <strong>Nhắc nợ đã tạo</strong>
        </CardHeader>

        <CardBody>
          <Row>
            <Col>
              <Button color="danger" onClick={() => toggle()}>
                Tạo nhắc nợ
              </Button>
              <br />
              <br />
              <Table responsive bordered>
                <thead>
                  <tr>
                    <th>Mã giao dịch</th>
                    <th>Số tài khoản</th>
                    <th>Số tiền</th>
                    <th>Nội dung</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {todos != null ? (
                    todos.activeTab0.map((todo) => (
                      <tr>
                        <td>{todo.id}</td>
                        <td>{todo.debtor_account_number}</td>
                        <td>{todo.amount}</td>
                        <td>{todo.message}</td>
                        <td>
                          <Button
                            color="danger"
                            onClick={() => toggle2(todo.id)}
                          >
                            XOÁ
                          </Button>
                          &ensp;
                        </td>
                      </tr>
                    ))
                  ) : (
                    //   {todos != null ? (
                    //     todos.map((todo) => (
                    //       <tr>
                    //         <td>-</td>
                    //         <td>-</td>
                    //         <td>-</td>
                    //         <td>-</td>
                    //         <td>-</td>

                    //         <td>
                    //           <Button color="danger">XÓA </Button>
                    //           &ensp;
                    //         </td>
                    //       </tr>
                    //     ))
                    //   ) : (
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <Button color="danger">XOÁ </Button>
                        &ensp;
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
