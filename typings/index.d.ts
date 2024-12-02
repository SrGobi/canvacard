import Canvacard = require("./src/Canvacard");
export declare let ConvolutionMatrix: {
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
export declare let Rank: typeof import("./src/Rank");
export declare let Spotify: typeof import("./src/Spotify");
export declare let WelcomeLeave: typeof import("./src/WelcomeLeave");
export declare let FortniteShop: typeof import("./src/FortniteShop");
export declare let Plugins: {
    circle: (ctx: any, w: any, h: any) => any;
    convolute: (ctx: any, canvas: any, matrix: any, opaque: any) => any;
    abbrev: (num: any) => string;
};
export declare let Assets: typeof import("./src/AssetsFactory");
export declare namespace MSX {
    let Brightness: (img: any, amount: any) => Promise<Buffer>;
    let Convolute: (img: any, matrix: any, opaque: any, lvl: any) => Promise<Buffer>;
    let Darkness: (img: any, amount: any) => Promise<Buffer>;
    let Greyscale: (img: any) => Promise<Buffer>;
    let Invert: (img: any) => Promise<Buffer>;
    let Sepia: (img: any) => Promise<Buffer>;
    let Threshold: (img: any, amount?: number) => Promise<Buffer>;
    let Trigger: (image: any, TRIGGERED: any) => Promise<any>;
}
export declare function registerFont(filePath: any, options: any): void;
export declare let write: typeof import("./src/Canvacard").write;
export declare let author: string;
export declare let version: any;
export { Canvacard as Canvas, Canvacard };
//# sourceMappingURL=index.d.ts.map