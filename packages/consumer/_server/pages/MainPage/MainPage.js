"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("react-dom/client");
const HeaderWeb_1 = require("../../components/Header/HeaderWeb");
const container = document.querySelector('#header');
if (container) {
    (0, client_1.hydrateRoot)(container, (0, jsx_runtime_1.jsx)(HeaderWeb_1.HeaderWeb, {}));
}
