import { lazy } from "react";

const CreateCustomer = lazy(() =>
  import("./CreateCustomer")
);

const RechargeCustomer = lazy(() =>
  import("./RechargeCustomer")
);

const Transaction = lazy(() => import("./Transaction"));

const routes = [
  {
    path: "/employee/create-customer",
    exact: true,
    name: "Tạo tài khoản",
    component: CreateCustomer,
  },
  {
    path: "/employee/recharge-customer",
    exact: true,
    name: "Nạp tiền",
    component: RechargeCustomer,
  },
  {
    path: "/employee/transaction",
    exact: true,
    name: "Lịch sử giao dịch",
    component: Transaction,
  },
];

export default routes;
