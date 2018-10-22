import './asset/vendor/bootstrap/css/bootstrap.min.css';
import './asset/vendor/fontawesome-free/css/all.min.css';
import './asset/vendor/datatables/dataTables.bootstrap4.css';
import './asset/vendor/sb-admin.min.css';
import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main.jsx";
import {
    HashRouter
} from "react-router-dom";

 
ReactDOM.render(<Main/>, document.getElementById("root")
);