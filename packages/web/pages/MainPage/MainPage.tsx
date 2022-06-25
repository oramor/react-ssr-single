import { hydrateRoot } from 'react-dom/client';
import { HeaderWeb } from '../../components/Header/HeaderWeb';

const container = document.querySelector('#header');
if (container) {
    hydrateRoot(container, <HeaderWeb />);
}
