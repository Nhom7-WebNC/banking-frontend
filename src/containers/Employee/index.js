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
      url: "/employee",
      icon: "icon-home",
    },
    {
      title: true,
      name: "chức năng",
    },
    {
      name: "Tạo tài khoản",
      url: "/employee/create-customer",
      icon: "icon-user",
    },
    {
      name: "Thông tin tài khoản",
      url: "/employee/account-info",
      icon: "icon-user",
    },
    {
      name: "Nạp tiền",
      url: "/employee/recharge-customer",
      icon: "icon-credit-card",
    },
    {
      name: "Xem lịch sử giao dịch",
      url: "/employee/transaction",
      icon: "icon-calendar",
    },
  ],
};

export const Employee = () => {
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
            </Switch>
          </Container>
        </main>
      </div>
    </div>
  );
};
