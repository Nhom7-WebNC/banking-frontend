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
  Input,
  Alert,
} from "reactstrap";
import { connector } from "../../constants";

const Transaction = () => {
  const [accountNumber, setAccountNumber] = useState("123456789");
  const [todos, setDataTable] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  
  const getTransaction = () => {
    console.log("account", accountNumber);
    const response = connector
      .get("/employee/get-transaction/" + accountNumber, {})
      .then(
        (response) => {
          setError("");
          setVisible(false);
          setDataTable(response.data.data);

        },
        (error) => {
          console.log("err123", error.response);
          setError(error.response.data.msg);
          setVisible(true);
        }
      );
  };


  return (
    <div className="animated fadeIn">
      <Row>
        <Alert color="danger" isOpen={visible}>
          {error}
        </Alert>
        <Col xs="12" md="9">
          <Input
            type = "text"
            name="text-input"
          placeholder="số tài khoản"
          onChange={(e) => setAccountNumber(e.target.value)}
          />
        </Col>
        <Button
          onClick={getTransaction}
          size="sm"
          color="primary"
          className="mx-2 px-5"
        >
          <i className="fa fa-dot-circle-o"></i> Xác nhận
            </Button>
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
                <Col>
                  <Table responsive bordered>
                    <thead>
                      <tr>

                        <th>Số tài khoản gửi</th>

                        <th>Số tài khoản nhận</th>
                        <th>Số tiền</th>
                        <th>Lời nhắn</th>
                        <th>Ngày giao dịch</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todos != null ? (
                        todos.activeTab0.map((todo) =>
                          (
                            <tr>
                              <td>{todo.sender_account_number}</td>
                              <td>{todo.receiver_account_number}</td>
                              <td>{todo.amount}</td>
                              <td>{todo.message}</td>
                              <td>{todo.created_at}</td>
                            </tr>
                          ))) : (
                          <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                        )

                      }
                    </tbody>
                  </Table>
                </Col>
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
                      {todos != null ? (
                        todos.activeTab0.map((todo) => (
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
                        <th>Số tài khoản gửi</th>

                        <th>Số tài khoản nhận</th>
                        <th>Số tiền</th>
                        <th>Lời nhắn</th>
                        <th>Ngày giao dịch</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todos != null ? (
                        todos.activeTab1.map((todo) =>
                          (
                            <tr>
                              <td>{todo.sender_account_number}</td>
                              <td>{todo.receiver_account_number}</td>
                              <td>{todo.amount}</td>
                              <td>{todo.message}</td>
                              <td>{todo.created_at}</td>
                            </tr>
                          ))) : (
                          <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                        )

                      }
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

          </TabContent>
        </Col>
      </Row>
    </div>
  );
};

export default Transaction;