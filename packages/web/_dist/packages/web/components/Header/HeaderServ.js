import { jsx as _jsx } from "react/jsx-runtime";
import { renderToString } from 'react-dom/server';
import { HeaderWeb } from './HeaderWeb';
export function HeaderServ() {
    return renderToString(_jsx(HeaderWeb, {}));
}
