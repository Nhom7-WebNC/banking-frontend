import { lazy } from "react";

const ManageEmployee = lazy(() => import("./ManageEmployee"));

const ManageTransaction = lazy(() => import("./ManageTransaction"));

const routes = [
  {
    path: "/admin/manage-employee",
    exact: true,
    name: "Quản lý nhân viên",
    component: ManageEmployee,
  },
  {
    path: "/admin/manage-transaction",
    exact: true,
    name: "Quản lý giao dịch",
    component: ManageTransaction,
  },
];

export default routes;
