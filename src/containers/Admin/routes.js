import { lazy } from "react";

const ManageEmployee = lazy(() => import("./ManageEmployee"));

const CreateEmployee = lazy(() => import("./createEmployee"));
const ListTransaction = lazy(() => import("./ListTransaction"));

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
    name: "Danh sách giao dịch",
    component: ListTransaction,
  },
  {
    path: "/admin/create-employee",
    exact: true,
    name: "Quản lý giao dịch",
    component: CreateEmployee,
  },
  
];

export default routes;
