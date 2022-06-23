import { renderToString } from 'react-dom/server';
import { fnComponent } from '../../components/Header/Header';
import { Header } from '../../components/Header/Header';

type PageComponentNode = {
    placeholder: string;
    component: fnComponent;
};

export class AboutPageServ {
    public components: PageComponentNode[];
    private reactRenders: ReactRenders;
    constructor() {
        this.components = [
            {
                placeholder: 'header',
                component: Header,
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
