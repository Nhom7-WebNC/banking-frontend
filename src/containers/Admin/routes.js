import { lazy } from "react";

const ManageEmployee = lazy(() => import("./ManageEmployee"));

const ManageTransaction = lazy(() => import("./ManageTransaction"));
const CreateEmployee = lazy(()=> import("./createEmployee"));

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
  {
    path: "/admin/create-employee",
    exact: true,
    name: "Quản lý giao dịch",
    component: CreateEmployee,
  },
];

export default routes;
