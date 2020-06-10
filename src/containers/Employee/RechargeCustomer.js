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

const RechargeCustomer = () => {
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
                <strong>Thông tin giao dịch</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Số tài khoản</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" name="text-input" />
                    <FormText color="danger">
                      Số tài khoản không hợp lệ
                    </FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Số tiền</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" name="text-input" />
                    <FormText color="danger">Số tiền không hợp lệ</FormText>
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

export default RechargeCustomer;
