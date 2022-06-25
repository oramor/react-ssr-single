import { renderToString } from 'react-dom/server';
import { HeaderWeb } from './HeaderWeb';

export function HeaderServ() {
    return renderToString(<HeaderWeb />);
}
