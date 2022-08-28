export = FortniteStats;
/**
 * Creador de imagen de estadisticas de fortnite
 */
declare class FortniteStats {
    token: any;
    platform: any;
    user: any;
    textFooter: string;
    textAverageKills: string;
    textAverageKill: string;
    textWPercent: string;
    textWinPercent: string;
    textKD: string;
    textWins: string;
    textWin: string;
    textKills: string;
    textKill: string;
    textMatches: string;
    textMatch: string;
    data: any;
    fetchPlayerData(): Promise<false | void>;
    setToken(value: any): FortniteStats;
    setPlatform(value: any): FortniteStats;
    setUser(value: any): FortniteStats;
    setText(variable: any, value: any): FortniteStats;
    toAttachment(): Promise<false | Canvas.Canvas>;
}
import Canvas = require("canvas");
//# sourceMappingURL=FortniteStats.d.ts.map