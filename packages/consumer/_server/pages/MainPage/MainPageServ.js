"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPageServ = void 0;
const server_1 = require("react-dom/server");
const HeaderWeb_1 = require("../../components/Header/HeaderWeb");
class MainPageServ {
    components;
    reactRenders;
    constructor() {
        this.components = [
            {
                placeholder: 'header',
                component: HeaderWeb_1.HeaderWeb,
            },
        ];
        this.reactRenders = {};
    }
    get placeholders() {
        this.components.forEach((v) => {
            const placeholderName = v.placeholder;
            this.reactRenders[placeholderName] = (0, server_1.renderToString)(v.component());
        });
        return {
            react: this.reactRenders,
        };
    }
}
exports.MainPageServ = MainPageServ;
