import { ReactElement } from 'react';

export type fnComponent = () => ReactElement;

export function Header(): ReactElement {
    const onClickHandler = () => {
        alert('Hello!');
    };

    return (
        <div onClick={onClickHandler} id="header">
            Hello World!
        </div>
    );
}
