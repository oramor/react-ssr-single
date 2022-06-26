import { renderToString } from 'react-dom/server';
import { HeaderWeb } from '../../components/Header/HeaderWeb';
export class MainPageServ {
    components;
    reactRenders;
    constructor() {
        this.components = [
            {
                placeholder: 'header',
                component: HeaderWeb,
            },
        ];
        this.reactRenders = {};
    }
    get placeholders() {
        this.components.forEach((v) => {
            const placeholderName = v.placeholder;
            this.reactRenders[placeholderName] = renderToString(v.component());
        });
        return {
            react: this.reactRenders,
        };
    }
}
