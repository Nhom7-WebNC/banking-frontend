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

const ManageEmployee = () => {
  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          <strong>Quản lý nhân viên</strong>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <Table responsive bordered>
                <thead>
                  <tr>
                    <th>Họ tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pompeius René</td>
                    <td>01/01/2020</td>
                    <td>Nam</td>
                    <td>123 tphcm</td>
                  </tr>
                  <tr>
                    <td>Pompeius René</td>
                    <td>01/01/2020</td>
                    <td>Nam</td>
                    <td>123 tphcm</td>
                  </tr>
                  <tr>
                    <td>Pompeius René</td>
                    <td>01/01/2020</td>
                    <td>Nam</td>
                    <td>123 tphcm</td>
                  </tr>
                  <tr>
                    <td>Pompeius René</td>
                    <td>01/01/2020</td>
                    <td>Nam</td>
                    <td>123 tphcm</td>
                  </tr>
                  <tr>
                    <td>Pompeius René</td>
                    <td>01/01/2020</td>
                    <td>Nam</td>
                    <td>123 tphcm</td>
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

export default ManageEmployee;
