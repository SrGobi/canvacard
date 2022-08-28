export = FortniteShop;
/**
 * Creador de imagen de la tienda de fortnite
 */
declare class FortniteShop {
    token: any;
    textHeader: string;
    textDaily: string;
    textFeatured: string;
    textDate: string;
    textFooter: string;
    options: {
        lang: string;
        dateFormat: string;
    };
    background: string;
    setToken(value: any): FortniteShop;
    setBackground(value: any): FortniteShop;
    setText(variable: any, value: any): FortniteShop;
    lang(value: any): FortniteShop;
    dateFormat(value: any): FortniteShop;
    toAttachment(): Promise<string | void>;
}
//# sourceMappingURL=FortniteShop.d.ts.map