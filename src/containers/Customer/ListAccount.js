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

const ListAccount = () => {
  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          <strong>Danh sách tài khoản</strong>
        </CardHeader>

        <CardBody>
          <Row>
            <Col>
              <Table responsive bordered>
                <thead>
                  <tr>
                    <th>Số tài khoản</th>
                    <th>Số dư</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>123456</td>
                    <td>100000</td>
                  </tr>
                  <tr>
                    <td>123456</td>
                    <td>100000</td>
                  </tr>
                  <tr>
                    <td>123456</td>
                    <td>100000</td>
                  </tr>
                  <tr>
                    <td>123456</td>
                    <td>100000</td>
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

export default ListAccount;
