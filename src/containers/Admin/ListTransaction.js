import React, { useState, useEffect } from "react";
// import { ComboBox } from '@progress/kendo-react-dropdowns';
import {
  Col,
  Row,
  Table,
  Alert,
  Label,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
} from "reactstrap";
import { connector } from "../../constants";

export const ListTransaction = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [todos, setDataTable] = useState();
  const [bank_code, setBankcode] = useState("all");
  const [dateStart, setStartDate] = useState("");
  const [dateEnd, setEndDate] = useState("");
  const[sumAmount,setSumAmount]=useState(0);

  const ListTransaction = () => {
    console.log(bank_code);
    console.log(dateStart);
    console.log(dateEnd);
    const response = connector
      .post("/admin/transactions", {
        bank_code,
        dateStart,
        dateEnd,
      })
      .then(
        (response) => {
          setError("");
          setVisible(false);
          setDataTable(response.data);
          setSumAmount(response.data.sum);
        },
        (error) => {
          // console.log("err123", error.response);
          setError(error.response.msg);
          setDataTable();
          setVisible(true);
          alert(error.response.data.msg);
        }
      );
  };
  
  
  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          <strong>Danh sách giao dịch</strong>
        </CardHeader>
        <CardBody>
          <Row>
            {/* <Alert color="danger" isOpen={visible}>
              {error}
            </Alert> */}
            <Col xs="12">
              <Row>
                <Col>
                  <Row>
                    <Label xs="2">
                      <b>Chọn ngân hàng</b>
                    </Label>
                    <Input
                      type="select"
                      name="select"
                      onChange={(e) => setBankcode(e.target.value)}
                      style={{ width: 700 }}
                    >
                      <option selected value="all">
                        Tất cả
                      </option>
                      <option value="TUB">TUB</option>
                      <option value="partner34">partner34</option>
                    </Input>
                    <br></br>
                    <br></br>
                    <br></br>
                  </Row>

                  <Row>
                    <Label xs="2">
                      <b>Từ ngày</b>
                    </Label>
                    <Input
                      style={{ width: 300 }}
                      type="date"
                      // name="text-input"
                      value={dateStart}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                    <Label xs="1">
                      <b>Đến ngày</b>
                    </Label>
                    <Input
                      style={{ width: 300 }}
                      type="date"
                      // name="text-input"
                      value={dateEnd}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                    <Button
                      style={{ width: 200, height: 35 }}
                      color="primary"
                      className="mx-2 px-5"
                      onClick={ListTransaction}
                    >
                      Tìm kiếm
                    </Button>
                    <br></br>
                    <br></br>
                    <br></br>
                  </Row>

                  <Row>
                    <Label xs="2">
                      <b>Tổng số tiền giao dịch</b>
                    </Label>
                    <Input
                      readOnly
                      value={sumAmount}
                      style={{ width: 300 }}
                    ></Input>
                    <br></br>
                    <br></br>
                    <br></br>
                  </Row>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Số tài khoản gửi</th>
                        <th>Ngân hàng gửi</th>
                        <th>Số tài khoản nhận</th>
                        <th>Ngân hàng nhận</th>
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
                            <td>{todo.amount}</td>
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
                          <td>-</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default ListTransaction;
