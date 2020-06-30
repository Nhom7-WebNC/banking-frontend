import React, { useState } from "react";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  TabContent,
  TabPane,
  Button,
} from "reactstrap";
import { connector } from "../../constants";

const Transaction = () => {
  const [accountNumber, setAccountNumber] = useState("230500002");
  const [todos, setDataTable] = useState("");

  const getTransaction = () => {
    console.log("account", accountNumber);
    const response = connector
      .get("/employee/get-transaction/" + accountNumber, {})
      .then(
        (response) => {
          console.log("response", response.data.data);
          setDataTable(response.data.data);
          // getIndex();
        },
        (error) => {
          console.log("err123", error.response);
        }
      );
  };

  const [activeTab, setActiveTab] = useState(4);
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12">
          <Nav tabs>
            <NavItem>
              <NavLink active={activeTab === 0} onClick={() => setActiveTab(0)}>
                Nhận tiền
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={activeTab === 1} onClick={() => setActiveTab(1)}>
                Chuyển khoản
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={activeTab === 2} onClick={() => setActiveTab(2)}>
                Thanh toán nhắc nợ
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activeTab}>
            <TabPane tabId={0}>
              <Row>
                <Col getTransaction></Col>
              </Row>
            </TabPane>
            <TabPane tabId={4}>
              <Row>
                <Col>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Họ tên</th>
                        <th>Tên đăng nhập</th>
                        <th>Số tài khoản</th>
                        <th>Số tiền</th>
                        <th>Ngày giao dịch</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todos.length ? (
                        todos.map((todo) => (
                          <tr>
                            <td>{todo.sender_account_number}</td>
                            <td>{todo.sender_bank_code}</td>
                            <td>{todo.receiver_account_number}</td>
                            <td>{todo.receiver_bank_code}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
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
            </TabPane>
            <TabPane tabId={1}>
              <Row>
                <Col>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Tên người gửi</th>
                        <th>Tên người nhận</th>
                        <th>Số tiền</th>
                        <th>Ngày giao dịch</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pompeius René</td>
                        <td>Rens</td>
                        <td>20.000.000</td>
                        <td>01/01/2020</td>
                      </tr>
                      <tr>
                        <td>Pompeius René</td>
                        <td>Rens</td>
                        <td>20.000.000</td>
                        <td>01/01/2020</td>
                      </tr>
                      <tr>
                        <td>Pompeius René</td>
                        <td>Rens</td>
                        <td>20.000.000</td>
                        <td>01/01/2020</td>
                      </tr>
                      <tr>
                        <td>Pompeius René</td>
                        <td>Rens</td>
                        <td>20.000.000</td>
                        <td>01/01/2020</td>
                      </tr>
                      <tr>
                        <td>Pompeius René</td>
                        <td>Rens</td>
                        <td>20.000.000</td>
                        <td>01/01/2020</td>
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
            </TabPane>
            <TabPane tabId={2}>
              <Row>
                <Col>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Họ tên</th>
                        <th>Tên đăng nhập</th>
                        <th>Số tài khoản</th>
                        <th>Số tiền</th>
                        <th>Nội dung</th>
                        <th>Ngày giao dịch</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pompeius René</td>
                        <td>Popre</td>
                        <td>123456789</td>
                        <td>20.000.000</td>
                        <td>Trả góp</td>
                        <td>01/01/2020</td>
                      </tr>
                      <tr>
                        <td>Pompeius René</td>
                        <td>Popre</td>
                        <td>123456789</td>
                        <td>20.000.000</td>
                        <td>Trả góp</td>
                        <td>01/01/2020</td>
                      </tr>
                      <tr>
                        <td>Pompeius René</td>
                        <td>Popre</td>
                        <td>123456789</td>
                        <td>20.000.000</td>
                        <td>Trả góp</td>
                        <td>01/01/2020</td>
                      </tr>
                      <tr>
                        <td>Pompeius René</td>
                        <td>Popre</td>
                        <td>123456789</td>
                        <td>20.000.000</td>
                        <td>Trả góp</td>
                        <td>01/01/2020</td>
                      </tr>
                      <tr>
                        <td>Pompeius René</td>
                        <td>Popre</td>
                        <td>123456789</td>
                        <td>20.000.000</td>
                        <td>Trả góp</td>
                        <td>01/01/2020</td>
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
            </TabPane>
            <Button
              onClick={getTransaction}
              size="sm"
              color="primary"
              className="mx-2 px-5"
            >
              <i className="fa fa-dot-circle-o"></i> Xác nhận
            </Button>
          </TabContent>
        </Col>
      </Row>
    </div>
  );
};

export default Transaction;
