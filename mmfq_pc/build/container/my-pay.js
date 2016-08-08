
"use strict";

function onLoad() {
    "use strict";

    ReactDOM.render(React.createElement(
        "div",
        null,
        React.createElement(R_Header, null),
        React.createElement(R_Cashier, { one: "1", two: "2" }),
        React.createElement(
            "div",
            { style: { borderTop: '2px solid #ff5370' } },
            React.createElement(
                "div",
                { className: "wrap" },
                React.createElement(RMy_pay, null)
            )
        ),
        React.createElement(R_Footer, null),
        React.createElement(R_ToolBar, null)
    ), document.getElementById("content"));
}