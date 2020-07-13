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
} from "reactstrap";
import { connector } from "../../constants";
const ManageEmployee = () => {

  const [todos, setDataTable] = useState();
  const [error, setError] = useState("");

  const getEmployee = ()=>{
    const respon = connector.get("/admin/manage-employee",{

    })
    .then(
      (response) => {
        setError("");
        console.log(response);
        setDataTable(response.data.data);

      },
      (error) => {
        console.log("err123", error.response);
        setError(error.response.data.msg);
        setDataTable();
        
      }
    )

  }
  useEffect(() => {
    getEmployee();
  }, []);
  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          <strong>Quản lý nhân viên</strong>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
            <Button
          onClick={getEmployee}
          size="sm"
          color="primary"
          className="mx-2 px-5"
        >
          <i className="fa fa-dot-circle-o"></i> Xác nhận
            </Button>
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
                      {todos != null ? (
                        todos.activeTab0.map((todo) =>
                          (
                            <tr>
                              <td>{todo.name}</td>
                              <td>{todo.birthday}</td>
                              <td>{todo.gender}</td>
                              <td>{todo.address}</td>
                              
                            </tr>
                          ))) : (
                          <tr>
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
        </CardBody>
      </Card>
    </div>
  );
};

export default ManageEmployee;
