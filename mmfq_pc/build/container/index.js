"use strict";

function onLoad() {
    "use strict";

    ReactDOM.render(React.createElement(
        "div",
        null,
        React.createElement(R_Header, null),
        React.createElement(R_Logo, null),
        React.createElement(R_Nav, { now: "1" }),
        React.createElement(R_Banner, null),
        React.createElement(R_IndexTitle, { firstTitle: "限时", secondTitle: "秒杀", subTitle: "Time spike", href: "goods.html" }),
        React.createElement(R_SaleGoods, null),
        React.createElement(R_IndexTitle, { firstTitle: "合作", secondTitle: "医院", subTitle: "Cooperative Hospital" }),
        React.createElement(R_IndexHospital, null),
        React.createElement(R_IndexTitle, { firstTitle: "人气", secondTitle: "项目", subTitle: "Popular Project", isRed: "true", href: "goods-list.html" }),
        React.createElement(R_PopularGoods, null),
        React.createElement(R_IndexTitle, { firstTitle: "分期", secondTitle: "流程", subTitle: "Staging Process", isRed: "true" }),
        React.createElement(
            "div",
            { className: "wrap", style: { marginBottom: 40 } },
            React.createElement("img", { src: "../static/images/common/staging-progress.jpg" })
        ),
        React.createElement(R_Footer, null),
        React.createElement(R_ToolBar, null)
    ), document.getElementById("content"));
}