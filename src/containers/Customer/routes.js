import { lazy } from "react";

const ListAccount = lazy(() =>
    import("./ListAccount")
);

const ListReceiver = lazy(() =>
    import("./ListReceiver")
);

const TransferSameBank = lazy(() =>
    import("./TransferSameBank")
);

const TransferOtherBank = lazy(() =>
    import("./TransferOtherBank")
);

const SendHistory = lazy(() =>
    import("./SendHistory.js")
);

const ReceiveHistory = lazy(() =>
    import("./ReceiveHistory")
);

const routes = [
    {
        path: "/customer/list-account",
        exact: true,
        name: "Danh sách tài khoản",
        component: ListAccount,
    },

    {
        path: "/customer/list-receiver",
        exact: true,
        name: "Danh sách người nhận",
        component: ListReceiver,
    },

    {
        path: "/customer/transfer-same-bank",
        exact: true,
        name: "Chuyển tiền cùng ngân hàng",
        component: TransferSameBank,
    },

    {
        path: "/customer/transfer-other-bank",
        exact: true,
        name: "Chuyển tiền liên ngân hàng",
        component: TransferOtherBank,
    },

    {
        path: "/customer/history-send",
        exact: true,
        name: "Lịch sử giao dịch gửi tiền",
        component: SendHistory,
    },

    {
        path: "/customer/history-receive",
        exact: true,
        name: "Lịch sử giao dịch nhận tiền",
        component: ReceiveHistory,
    },
];

export default routes;