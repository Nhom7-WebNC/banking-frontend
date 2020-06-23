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
  Input,
  Label,
  Row,
} from "reactstrap";

const TransferOtherBank = () => {
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
                <strong>Thông tin người hưởng</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Số tài khoản</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <Input type="text" name="text-input" />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col xs="6" md="3">
                    <Label htmlFor="text-input">Ngân hàng/Ngân hàng TMCP</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <Input type="text" name="text-input" />
                  </Col>
                </FormGroup>
              </CardBody>

              <CardHeader>
                <strong>Thông tin giao dịch</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Số tiền chuyển</Label>
                  </Col>
                  <Col md="3">
                    <Input type="text" name="text-input" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Nội dung chuyển tiền</Label>
                  </Col>
                  <Col xs="6" md="3">
                    <Input type="text" name="text-input" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Phí chuyển tiền</Label>
                  </Col>
                  <Col md="3">
                    <Input type="text" name="text-input" />
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
                  <i className="fa fa-dot-circle-o"></i> Xác nhận
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TransferOtherBank;
