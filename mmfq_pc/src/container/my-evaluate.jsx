'use strict';

function onLoad() {
    "use strict";
    ReactDOM.render(
        <div>
            <R_Header/>
            <R_Logo/>
            <R_Nav/>
            <div style={{borderTop: '2px solid #ff5370'}}>
                <div className="wrap">
                    <R_MyEvaluate/>
                </div>
            </div>
            <R_Footer/>
            <R_ToolBar/>
        </div>
        , document.getElementById("content"));
}
