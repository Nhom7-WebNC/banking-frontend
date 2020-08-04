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
                    <th>Số tài khoản</th>
                    <th>Số tiền</th>
                    <th>Nội dung</th>
                    <th></th>
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
                        <td>
                          <Button
                            // onClick={() => deleteReceiver(todo.id)}
                            color="danger"
                          >
                            THANH TOÁN{" "}
                          </Button>
                          &ensp;
                          <Button color="danger">XÓA </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <Button color="danger">THANH TOÁN </Button>
                        &ensp;
                        <Button color="danger">XÓA </Button>
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
