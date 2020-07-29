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
} from "reactstrap";
import { connector } from "../../constants";

const DebtCreate = (props) => {
    const [todos, setDataTable] = useState();

    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);

    return (
        <div className="animated fadeIn">

            {/* index */}
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
                                                {/* <td>{todo.reminder_account_number}</td>
                                                <td>{todo.name_reminiscent}</td> */}

                                                <td>
                                                    <Button
                                                        // onClick={() => deleteReceiver(todo.id)}
                                                        color="danger"
                                                    >
                                                        THANH TOÁN{" "}
                                                    </Button>
                          &ensp;
                          {/* <ButtonToggle
                                                        color="primary"
                                                    // onClick={() => toggle(todo)}
                                                    >
                                                        SỬA
                          </ButtonToggle> */}
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
                                                        // onClick={() => deleteReceiver(todo.id)}
                                                        color="danger"
                                                    >
                                                        THANH TOÁN{" "}
                                                    </Button>
                          &ensp;
                          {/* <ButtonToggle
                                                        color="primary"
                                                    // onClick={() => toggle(todo)}
                                                    >
                                                        SỬA
                          </ButtonToggle> */}
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
