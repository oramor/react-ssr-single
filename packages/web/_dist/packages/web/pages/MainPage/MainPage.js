import { jsx as _jsx } from "react/jsx-runtime";
import { hydrateRoot } from 'react-dom/client';
import { HeaderWeb } from '../../components/Header/HeaderWeb';
const container = document.querySelector('#header');
if (container) {
    hydrateRoot(container, _jsx(HeaderWeb, {}));
}
