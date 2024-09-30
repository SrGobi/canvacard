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
export declare let ProfileImage: typeof import("./src/Profile");
export declare let Rank: typeof import("./src/Rank");
export declare let Spotify: typeof import("./src/Spotify");
export declare let Welcomer: typeof import("./src/Welcomer");
export declare let Leaver: typeof import("./src/Leaver");
export declare let CaptchaGen: any;
export declare let FortniteShop: typeof import("./src/FortniteShop");
export declare let FortniteStats: typeof import("./src/FortniteStats");
export declare let Plugins: {
    circle: (ctx: any, w: any, h: any) => any;
    convolute: (ctx: any, canvas: any, matrix: any, opaque: any) => any;
    rectangle: (ctx: any, x: any, y: any, height: any, width: any, color: any, stroke?: boolean, lineWidth?: number) => any;
    round: (ctx: any, x: any, y: any, width: any, height: any, radius: any) => any;
    abbrev: (num: any) => string;
    renderEmoji: (ctx: any, msg: any, x: any, y: any) => Promise<any>;
};
export declare let Util: typeof import("./src/Util");
export declare let Assets: {
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
    let Brightness: (img: any, amount: any) => Promise<Buffer>;
    let Convolute: (img: any, matrix: any, opaque: any, lvl: any) => Promise<Buffer>;
    let Darkness: (img: any, amount: any) => Promise<Buffer>;
    let Greyscale: (img: any) => Promise<Buffer>;
    let Invert: (img: any) => Promise<Buffer>;
    let Sepia: (img: any) => Promise<Buffer>;
    let Threshold: (img: any, amount?: number) => Promise<Buffer>;
    let Trigger: (image: any, TRIGGERED: any) => Promise<any>;
}
export declare let write: typeof import("./src/Canvacard").write;
export declare let author: string;
export declare let version: any;
export { Canvacard as Canvas, Canvacard };
//# sourceMappingURL=index.d.ts.map