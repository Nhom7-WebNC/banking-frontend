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
    // select,
    // label,
} from "reactstrap";
import Calendar from 'react-calendar';

const ManageTransactionTime = () => {
    // state = {
    //     date: new Date(),
    // }
    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <strong>Danh sách giao dịch</strong>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <div>
                                <Calendar
                                    // onChange={this.onChange}
                                    // value={this.state.date}
                                />
                            </div>
                            <Table responsive bordered>
                                <thead>
                                    <tr>
                                        <th>Số tham chiếu</th>
                                        <th>Tài khoản nguồn</th>
                                        <th>Tài khoản nhận</th>
                                        <th>Số tiền</th>
                                        <th>Nội dung</th>
                                        {/* <th>Trạng thái</th> */}
                                        <th>Ngày giao dịch</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
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
        </div>
    );
};

export default ManageTransactionTime;
