import { ReactElement } from 'react';

export type fnComponent = () => ReactElement;

export function HeaderWeb(): ReactElement {
    return <div id="header">Hello World!</div>;
}
