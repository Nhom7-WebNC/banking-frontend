import { lazy } from "react";

const ManageEmployee = lazy(() => import("./ManageEmployee"));

const ManageTransaction = lazy(() => import("./ManageTransaction"));

const routes = [
  {
    path: "/admin/manage-employee",
    exact: true,
    name: "Tạo tài khoản",
    component: ManageEmployee,
  },
  {
    path: "/admin/manage-transaction",
    exact: true,
    name: "Nạp tiền",
    component: ManageTransaction,
  },
];

export default routes;
