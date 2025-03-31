export = genXpBar;
/**
 * Generate the experience bar
 * @param {Object} options Options object
 * @param {Object} options.rankData Rank data
 * @param {number} options.rankData.currentXp User current XP
 * @param {number} options.rankData.requiredXp XP required to level up
 * @param {number} options.rankData.level User level
 * @param {number} options.rankData.rank User rank
 * @param {string | string[]} options.rankData.barColor Color of the XP bar
 * @param {string} options.rankData.levelColor Color of the level text
 * @param {boolean} options.rankData.autoColorRank Automatically color the rank
 * @returns {Promise<Buffer>} Canvas
 */
declare function genXpBar(options: {
    rankData: {
        currentXp: number;
        requiredXp: number;
        level: number;
        rank: number;
        barColor: string | string[];
        levelColor: string;
        autoColorRank: boolean;
    };
}, font: any): Promise<Buffer>;
//# sourceMappingURL=genXpBar.d.ts.map