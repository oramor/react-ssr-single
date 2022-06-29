import { hydrateRoot } from 'react-dom/client';
import { Header } from '../../components/Header/Header.js';

const container = document.querySelector('#header');
if (container) {
    hydrateRoot(container, <Header />);
}
