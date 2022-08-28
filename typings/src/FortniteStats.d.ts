export = FortniteStats;
/**
 * Creador de imagen de estadisticas de fortnite
 */
declare class FortniteStats {
    /**
     * Token
     * @type {string}
     */
    token: string;
    /**
     * Plaraforma
     * @type {string}
     */
    platform: string;
    /**
     * Nombre de usuario
     * @type {string}
     */
    user: string;
    /**
     * Texto del footer
     * @type {string}
     */
    textFooter: string;
    /**
     * Texto AvengersKills
     * @type {string}
     */
    textAverageKills: string;
    /**
     * Texto AverageKill
     * @type {string}
     */
    textAverageKill: string;
    /**
     * Texto Porcejtage victoria
     * @type {string}
     */
    textWPercent: string;
    /**
     * Texto Porcejtage victorias
     * @type {string}
     */
    textWinPercent: string;
    /**
     * Texto KD
     * @type {string}
     */
    textKD: string;
    /**
     * Texto Victorias
     * @type {string}
     */
    textWins: string;
    /**
     * Texto Victoria
     * @type {string}
     */
    textWin: string;
    /**
     * Texto Kills
     * @type {string}
     */
    textKills: string;
    /**
     * Texto Kill
     * @type {string}
     */
    textKill: string;
    /**
     * Texto Partidas jugadas
     * @type {string}
     */
    textMatches: string;
    /**
     * Texto Partida jugada
     * @type {string}
     */
    textMatch: string;
    data: any;
    fetchPlayerData(): Promise<false | void>;
    /**
     * Valor del Token
     * @param {string} value
     * @returns {FortniteStats}
     */
    setToken(value: string): FortniteStats;
    /**
     * Valor de la plataforma
     * @param {string} value
     * @returns {FortniteStats}
     */
    setPlatform(value: string): FortniteStats;
    /**
     * Valor del usuario
     * @param {string} value
     * @returns {FortniteStats}
     */
    setUser(value: string): FortniteStats;
    /**
     * Valor del texto
     * @param {string} value
     * @returns {FortniteStats}
     */
    setText(variable: any, value: string): FortniteStats;
    toAttachment(): Promise<false | Canvas.Canvas>;
}
import Canvas = require("canvas");
//# sourceMappingURL=FortniteStats.d.ts.map