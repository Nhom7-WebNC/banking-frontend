import React from "react";
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
} from "reactstrap";

const ReceiveHistory = () => {
    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <strong>Lịch sử giao dịch nhận tiền</strong>
                </CardHeader>

                <CardBody>
                    <Row>
                        <Col>
                            <Table responsive bordered>
                                <thead>
                                    <tr>
                                        <th>Số tài khoản người gửi</th>
                                        <th>Tên người gửi</th>
                                        <th>Ngân hàng người gửi</th>
                                        <th>Số tiền</th>
                                        <th>Tin nhắn kèm</th>
                                        <th>Ngày giao dịch</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>123456</td>
                                        <td>Nguyễn Phong</td>
                                        <td>Vietcombank</td>
                                        <td>1000000</td>
                                        <td>phong chuyen tien</td>
                                        <td>12/6/2020</td>
                                    </tr>
                                    <tr>
                                        <td>123456</td>
                                        <td>Nguyễn Phong</td>
                                        <td>Vietcombank</td>
                                        <td>1000000</td>
                                        <td>phong chuyen tien</td>
                                        <td>12/6/2020</td>
                                    </tr>
                                    <tr>
                                        <td>123456</td>
                                        <td>Nguyễn Phong</td>
                                        <td>Vietcombank</td>
                                        <td>1000000</td>
                                        <td>phong chuyen tien</td>
                                        <td>12/6/2020</td>
                                    </tr>
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
        </div >
    );
};

export default ReceiveHistory;
