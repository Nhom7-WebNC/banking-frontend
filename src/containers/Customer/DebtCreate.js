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
    toggle,
} from "reactstrap";
import { connector } from "../../constants";

const DebtCreate = (props) => {
    const [todos, setDataTable] = useState();
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ModalTitle, setModalTitle] = useState();
    const [unmountOnClose, setUnmountOnClose] = useState(true);
    const { buttonLabel, className } = props;
    const updateReceiver = () => {
        setLoading(true);
    };
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
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
                                    // value={reminderNumber}
                                    // onChange={(e) => setReminderNumber(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="text-input">Chủ tài khoản</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input
                                        type="text"
                                        name="text-input"
                                    // value={reminderNumber}
                                    // onChange={(e) => setReminderNumber(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="text-input">Số tiền</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input
                                        type="text"
                                        name="text-input"
                                    // value={reminderNumber}
                                    // onChange={(e) => setReminderNumber(e.target.value)}
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
                                    // value={reminderNumber}
                                    // onChange={(e) => setReminderNumber(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                        </CardBody>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => updateReceiver()}>
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
                            <Button color="danger" onClick={() => toggle()}>Tạo nhắc nợ</Button>
                            <br />
                            <br />
                            <Table responsive bordered>

                                <thead>
                                    <tr>
                                        <th>Mã giao dịch</th>
                                        <th>Chủ khoản</th>
                                        <th>Số tài khoản</th>
                                        <th>Số tiền</th>
                                        <th>Nội dung</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {todos != null ? (
                                        todos.map((todo) => (
                                            <tr>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>

                                                <td>
                                                    <Button
                                                        color="danger"
                                                    >
                                                        XÓA{" "}
                                                    </Button>
                          &ensp;

                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                            <tr>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>
                                                    <Button
                                                        color="danger"
                                                    >
                                                        XOÁ{" "}
                                                    </Button>
                          &ensp;

                                                </td>
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

export default DebtCreate;
