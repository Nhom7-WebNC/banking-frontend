import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";

const CreateCustomer = () => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12">
          <Card>
            <Form
              action=""
              method="post"
              encType="multipart/form-data"
              className="form-horizontal"
            >
              <CardHeader>
                <strong>Thông tin đăng nhập</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Tên đăng nhập</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" name="text-input" />
                    <FormText color="danger">
                      Tên đăng nhập không hợp lệ
                    </FormText>
                  </Col>
                </FormGroup>
              </CardBody>
              <CardHeader>
                <strong>Thông tin cá nhân</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Họ và tên</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" name="text-input" />
                    <FormText color="danger">Tên đã tồn tại</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Email</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="password" name="text-input" />
                    <FormText color="danger">Email không hợp lệ</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Số điện thoại</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" name="text-input" />
                    <FormText color="danger">
                      Số điện thoại không hợp lệ
                    </FormText>
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  className="mx-2 px-5"
                >
                  <i className="fa fa-dot-circle-o"></i> Lưu
                </Button>
                <Button
                  type="reset"
                  size="sm"
                  color="danger"
                  className="mx-2 px-5"
                >
                  <i className="fa fa-ban"></i> Tạo lại
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CreateCustomer;
