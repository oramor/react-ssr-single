import { hydrateRoot } from 'react-dom/client';
import { HeaderWeb } from '../../components/Header/Header.js';

const container = document.querySelector('#header');
if (container) {
    hydrateRoot(container, <HeaderWeb />);
}
