import Canvacard = require("./src/Canvacard");
export declare const ConvolutionMatrix: {
    /**
     * Edges Matrix
     */
    EDGES: number[];
    /**
     * Blur Matrix
     */
    BLUR: number[];
    /**
     * Sharpen Matrix
     */
    SHARPEN: number[];
    /**
     * Burn Matrix
     */
    BURN: number[];
};
export declare const Rank: typeof import("./src/Rank");
export declare const Spotify: typeof import("./src/Spotify");
export declare const Welcomer: typeof import("./src/Welcomer");
export declare const Leaver: typeof import("./src/Leaver");
export declare const CaptchaGen: any;
export declare const FortniteShop: typeof import("./src/FortniteShop");
export declare const FortniteStats: typeof import("./src/FortniteStats");
export declare const Plugins: {
    circle: (ctx: any, w: any, h: any) => any;
    convolute: (ctx: any, canvas: any, matrix: any, opaque: any) => any;
    rectangle: (ctx: any, x: any, y: any, height: any, width: any, color: any, stroke?: boolean, lineWidth?: number) => any;
    round: (ctx: any, x: any, y: any, width: any, height: any, radius: any) => any;
    abbrev: (num: any) => any;
    renderEmoji: (ctx: any, message: any, x: any, y: any) => Promise<any>;
};
export declare const Util: typeof import("./src/Util");
export declare const Assets: {
    new (): import("./src/Assets");
    load: (warnIfFailed?: boolean) => void;
    ASSETS_DIR: string;
    font: {
        get(name: any): any;
        getMetadata(name: any): any;
        all(): {};
    };
    image: {
        get(name: any): any;
        getMetadata(name: any): any;
        all(): {};
    };
};
export declare namespace MSX {
    const Brightness: (img: any, amount: any) => Promise<Buffer>;
    const Convolute: (img: any, matrix: any, opaque: any, lvl: any) => Promise<Buffer>;
    const Darkness: (img: any, amount: any) => Promise<Buffer>;
    const Greyscale: (img: any) => Promise<Buffer>;
    const Invert: (img: any) => Promise<Buffer>;
    const Sepia: (img: any) => Promise<Buffer>;
    const Threshold: (img: any, amount?: number) => Promise<Buffer>;
    const Trigger: (image: any, TRIGGERED: any) => Promise<any>;
}
export declare const write: typeof import("./src/Canvacard").write;
export declare const author: string;
export declare const version: any;
export { Canvacard as Canvas, Canvacard };
//# sourceMappingURL=index.d.ts.map