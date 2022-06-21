import { renderToString } from 'react-dom/server';
import { fnComponent } from '../../components/Header/HeaderWeb';
import { HeaderWeb } from '../../components/Header/HeaderWeb';

type PageComponentNode = {
    placeholder: string;
    component: fnComponent;
};

export class MainPageServ {
    public components: PageComponentNode[];
    private reactRenders: ReactRenders;
    constructor() {
        this.components = [
            {
                placeholder: 'header',
                component: HeaderWeb,
            },
        ];
        this.reactRenders = {};
    }

    get placeholders(): PlaceholdersObject {
        this.components.forEach((v) => {
            const placeholderName = v.placeholder;
            this.reactRenders[placeholderName] = renderToString(v.component());
        });
        return {
            react: this.reactRenders,
        };
    }
}
