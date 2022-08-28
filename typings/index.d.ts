import Greeting from "./src/Base/GreetingCard";
import Assets from "./src/Assets";
import Canvacard from "./src/Canvacard";
import FortniteShop from "./src/FortniteShop";
import FortniteStats from "./src/FortniteStats";
import Leaver from "./src/Leaver";
import Plugins from "./src/Plugins";
import Rank from "./src/Rank";
import Spotify from "./src/Spotify";
import Util from "./src/Util";
import Welcomer from "./src/Welcomer";

interface MiscellaneousExtensions {
    Brightness: typeof import("./libs/Brightness");
    Convolute: typeof import("./libs/Convolute");
    Darkness: typeof import("./libs/Darkness");
    Greyscale: typeof import("./libs/Greyscale");
    Invert: typeof import("./libs/Invert");
    Sepia: typeof import("./libs/Sepia");
    Threshold: typeof import("./libs/Threshold");
    Trigger: typeof import("./libs/Trigger");
}

export const ConvolutionMatrix: typeof Canvacard.CONVOLUTION_MATRIX;
export const MSX: MiscellaneousExtensions;
export const write: (data: Buffer, name: string) => void;
export const author: string;
export const version: string;
export type CanvacardRankData = Rank.CanvacardRankData;

export {
    Canvacard,
    Canvacard as Canvas,
    FortniteShop,
    FortniteStats,
    Rank,
    Spotify,
    Welcomer,
    Leaver,
    Greeting,
    Plugins,
    Assets,
    Util,
};