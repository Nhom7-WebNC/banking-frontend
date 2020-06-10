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
      url: "/admin",
      icon: "icon-home",
    },
    {
      title: true,
      name: "chức năng",
    },
    {
      name: "Quản lý nhân viên",
      url: "/admin/manage-employee",
      icon: "icon-people",
    },
    {
      name: "Danh sách giao dịch",
      url: "/admin/manage-transaction",
      icon: "icon-calendar",
    },
  ],
};

export const Admin = () => {
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
              <Redirect from="/admin" to="/admin/manage-employee" />
            </Switch>
          </Container>
        </main>
      </div>
    </div>
  );
};
