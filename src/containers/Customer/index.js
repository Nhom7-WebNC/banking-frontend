import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import { AppHeader, AppBreadcrumb } from "@coreui/react";
import { Header, Sidebar } from "../../components";
import routes from "./routes";
import { useHistory } from "react-router-dom";

const navConfigs = {
  items: [
    {
      name: "Trang chủ",
      url: "/customer/info-account",
      icon: "icon-star",
    },

  

    {
      name: "Danh sách người nhận",
      url: "/customer/list-receiver",
      icon: "icon-star",
    },

    {
      name: "Chuyển tiền",
      url: "/customer/transfer-same-bank",

      icon: "icon-star",
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
      name: "Quản lý nhắc nợ",
      icon: "icon-star",
      url: "/customer/debt",
    },

    {
      name: "Nhắc nợ đã tạo",
      url: "/customer/debt-create",
    },

    {
      name: "Nhắc nợ đã nhận",
      url: "/customer/debt-receive",
    },

    {
      name: "Lịch sử giao dịch",
      url: "/customer/transaction",
      icon: "icon-star",
    },

    
  ],
};

export const Customer = () => {
  const history = useHistory();

  if (localStorage.getItem("role") != "customer") {
    localStorage.clear();
    history.push("/login");
  }
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
