import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./App.scss";
import {
  Customer,
  Employee,
  Admin,
  Login,
  Register,

  Page404,
  Page500,
  ForgetPassword,
  ChangePassword,
} from "./containers";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={() => <Spinner />}>
          <Switch>
            <Route
              path="/login"
              name="Đăng nhập"
              render={(props) => <Login {...props} />}
            />

            <Route
              path="/forget-password"
              name="Quên mật khẩu"
              render={(props) => <ForgetPassword {...props} />}
            />

            <Route
              path="/change-password"
              name="Đổi mật khẩu"
              render={(props) => <ChangePassword {...props} />}
            />

            <Route
              path="/register"
              name="Đăng kí"
              render={(props) => <Register {...props} />}
            />

            <Route
              path="/customer"
              name="Khách hàng"
              render={(props) => <Customer {...props} />}
            />

            <Route
              path="/employee"
              name="Nhân viên"
              render={(props) => <Employee {...props} />}
            />
            <Route
              path="/admin"
              name="Quản trị viên"
              render={(props) => <Admin {...props} />}
            />

            <Route
              path="/500"
              name="Lỗi hệ thống"
              render={(props) => <Page500 {...props} />}
            />
            <Redirect from="/" to="/login" />
            <Route
              path="*"
              exact={true}
              name="Không tìm thấy"
              render={(props) => <Page404 {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
