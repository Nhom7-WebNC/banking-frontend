import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import { AppHeader, AppBreadcrumb } from "@coreui/react";
import { Header, Sidebar } from "../../components";
import routes from "./routes";

const navConfigs = {
  items: [
    {
      name: "Trang chủ",
      // url: "/customer",
      url: "/customer",
      icon: "icon-star",
      //icon: "icon-home",
    },

    {
      name: "Thông tin tài khoản",
      // url: "/customer",
      url: "/customer/info-account",
      icon: "icon-star",
      //icon: "icon-home",
    },
    
    {
      name: "Danh sách tài khoản",
      url: "/customer/list-account",
      icon: "icon-star",
      //icon: "icon-user",
    },

    {
      name: "Danh sách người nhận",
      url: "/customer/list-receiver",
      icon: "icon-star",
      //icon: "icon-people"
    },

    {
      name: "Chuyển tiền",
      icon: "icon-star",
      //icon: "icon-money"
    },

    {
      name: "Cùng ngân hàng",
      url: "/customer/transfer-same-bank",
    },

    {
      name: "Liên ngân hàng",
      url: "/customer/transfer-other-bank",
    },

    {
      name: "Lịch sử giao dịch",
      //url: "/customer/transfer-same-bank",
      icon: "icon-star",
      //icon: "icon-money"
    },

    {
      name: "Gửi tiền",
      url: "/customer/history-send",
    },

    {
      name: "Nhận  tiền",
      url: "/customer/history-receive",
    }
    
  ],
};

export const Customer = () => {
    return (
      <div className="app">
        <AppHeader fixed>
          <Header />
        </AppHeader>
        <div className="app-body">
          <Sidebar navigation={navConfigs} />
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => <route.component {...props} />}
                    />
                  ) : null;
                })}
                  <Redirect from="/customer" to="/customer/info-account" />
              </Switch>
            </Container>
          </main>
        </div>
      </div>
    );
  };

//  export default Customer;