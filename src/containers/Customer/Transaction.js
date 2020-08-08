import React, { useState, useEffect } from "react";
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

export const Transaction = () => {
  const [accountNumber] = useState(localStorage.getItem("accountNumber"));
  const [todos, setDataTable] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const getTransaction = async () => {
    // console.log("account", accountNumber);
    const response = connector
      .post("/customers/get-transaction/", {
        accountNumber,
      })
      .then(
        (response) => {
          console.log("res", response);
          console.log("resdata", response.data);
          setError("");
          setVisible(false);
          setDataTable(response.data);
        },
        (error) => {
          console.log("err123", error.response);
          setError(error.response.msg);
          setDataTable();
          setVisible(true);
        }
      );
  };

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <div className="animated fadeIn">
      <Row>
        <Alert color="danger" isOpen={visible}>
          {error}
        </Alert>

        <Col xs="12">
          <Nav tabs>
            <NavItem>
              <NavLink active={activeTab === 0} onClick={() => setActiveTab(0)}>
                Nhận tiền
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={activeTab === 1} onClick={() => setActiveTab(1)}>
                Gửi tiền
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
                        todos.activeTab0.map((todo) => (
                          <tr>
                            <td>{todo.sender_account_number}</td>
                            <td>{todo.receiver_account_number}</td>
                            <td>{todo.amount}</td>
                            <td>{todo.message}</td>
                            <td>{todo.created_at}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
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
                        todos.activeTab1.map((todo) => (
                          <tr>
                            <td>{todo.sender_account_number}</td>
                            <td>{todo.receiver_account_number}</td>
                            <td>{todo.amount}</td>
                            <td>{todo.message}</td>
                            <td>{todo.created_at}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId={2}>
              <Row>
                <Col>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>TK Cho nợ</th>
                        <th>TK nợ</th>
                        <th>Số tiền</th>
                        <th>Nội dung</th>
                        {/* <th>Ngày giao dịch</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {todos != null ? (
                        todos.activeTab2.map((todo) => (
                          <tr>
                            <td>{todo.creditor_account_number}</td>
                            <td>{todo.debtor_account_number}</td>
                            <td>{todo.amount}</td>
                            <td>{todo.message}</td>
                            {/* <td>{todo.created_at}</td> */}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
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
