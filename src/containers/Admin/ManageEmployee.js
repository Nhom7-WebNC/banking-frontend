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
  location,
} from "reactstrap";
import { connector } from "../../constants";
const ManageEmployee = () => {
  const [todos, setDataTable] = useState();
  const [error, setError] = useState("");

  const getEmployee = () => {
    const respon = connector.get("/admin/manage-employee", {}).then(
      (response) => {
        setError("");
        // console.log(response);
        setDataTable(response.data);
       
      },
      (error) => {
        console.log("err123", error.response);
        setError(error.response.msg);
        setDataTable();
      }
    );
  };
  useEffect(() => {
    getEmployee();
  }, []); 

  const deleteEmployee = (id)=>{
    
    const abc = connector.get("/admin/delete/" + id, {}).then(
      (response) => {
       
        setError("");
        // console.log(response);
        setDataTable(response.data);
        
       
      },
      (error) => {
       
        console.log("err123", error.response);
        setError(error.response.msg);
        setDataTable();
        
      }
    );
  };

  
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
                // onClick={getEmployee}
                href="create-employee"
                size="sm"
                color="primary"
                className="mx-2 px-5"
              >THÊM
              </Button>
              <Table responsive bordered>
                <thead>
                  <tr>
                    <th>Họ tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {todos != null ? (
                    todos.map((todo) => (
                      <tr>
                        <td>{todo.name}</td>
                        <td>{todo.birthday}</td>
                        <td>{todo.gender}</td>
                        <td>{todo.address}</td>
                          <td><Button
                          
                          
                          onClick={()=> deleteEmployee(todo.id)} 
                          color = "danger"> 
                          XOÁ  </Button>
                          &ensp;
                          <ButtonToggle color="primary">SỬA</ButtonToggle>
                          {todo.id}</td>
                        
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td></td>
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

export default ManageEmployee;
