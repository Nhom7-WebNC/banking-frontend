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

const ListReceiver = () => {
  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          <strong>Danh sách người nhận</strong>
        </CardHeader>

        <CardBody>
          <Row>
            <Col>
              <Table responsive bordered>
                <thead>
                  <tr>
                    <th>Số tài khoản</th>
                    <th>Tên gợi nhớ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>123456</td>
                    <td>Nguyễn Phong</td>
                  </tr>
                  <tr>
                    <td>123457</td>
                    <td>Lê Trung Phong</td>
                  </tr>
                  <tr>
                    <td>123458</td>
                    <td>Lê Hữu Nhân</td>
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

export default ListReceiver;
