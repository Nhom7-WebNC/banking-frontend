import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Table,
  TabContent,
  TabPane,
  NavLink,
  NavItem,
  Nav,
  Alert,
} from "reactstrap";
import { connector } from "../../constants";

const Debt = (props) => {
  const [todos, setDataTable] = useState();
  const [activeTab, setActiveTab] = useState(1);

  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const sender = localStorage.getItem("accountNumber");

  const getDebt = () => {
    // setLoading(true);
    const response = connector
      .post("/customers/get-debt", {
        account_number: sender,
      })
      .then(
        (response) => {
          setError("");
          setDataTable(response.data);
          console.log(response.data);
        },
        (error) => {
          console.log("err123", error.response);
          setError(error.response.msg);
          setDataTable();
        }
      );
  };
  useEffect(() => {
    getDebt();
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
              <NavLink active={activeTab === 1} onClick={() => setActiveTab(1)}>
                Nhắc nợ đã tạo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={activeTab === 2} onClick={() => setActiveTab(2)}>
                Nhắc nợ đã nhận
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activeTab}>
            <TabPane tabId={1}>
              <Row>
                <Col>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Mã giao dịch</th>
                        <th>Số tài khoản</th>
                        <th>Số tiền</th>
                        <th>Nội dung</th>
                      </tr>
                    </thead>

                    <tbody>
                      {todos != null ? (
                        todos.activeTab0.map((todo) => (
                          <tr>
                            <td>{todo.id}</td>
                            <td>{todo.creditor_account_number}</td>
                            <td>{todo.amount}</td>
                            <td>{todo.message}</td>
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
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId={2}>
              <Row>
                <Col>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Mã giao dịch</th>
                        <th>Số tài khoản</th>
                        <th>Số tiền</th>
                        <th>Nội dung</th>
                      </tr>
                    </thead>

                    <tbody>
                      {todos != null ? (
                        todos.activeTab1.map((todo) => (
                          <tr>
                            <td>{todo.id}</td>
                            <td>{todo.creditor_account_number}</td>
                            <td>{todo.amount}</td>
                            <td>{todo.message}</td>
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
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </div>
  );
};

export default Debt;
