const Canvas = require("canvas");
const fortnite = require("fortnite");

/**
 * Obtiene variables y tipos
 * @param {object} prefix El tipo de variable
 * @param {object} variable La variable a cambiar
 * @returns La variable formateada
 */
 const formatVariable = (prefix, variable) => {
  const formattedVariable = variable.toLowerCase()
    .split("-").map((word) => word.charAt(0).toUpperCase() + word.substr(1, word.length).toLowerCase()).join("");
  return prefix + formattedVariable;
}

/**
 * Creador de imagen de estadisticas de fortnite
 */

class FortniteStats {

  /**
* FortniteStats image builder
* @example
*  const FortniteStatsCardURL = await new FortniteStats()
      .setToken("3533192f-66bc-48b2-8df9-c03bfeb75957")
      .setUser("BLD SRGOBI")
      .setPlatform("pc")
      .setText("footer", "ESP CUSTOMS X FORTNITE")
      .toAttachment();
  await channel.send({ files: [{ attachment: FortniteStatsCardURL, name: 'FortniteStats.png' }] })
*/

  constructor() {
    /**
     * Token
     * @type {string}
     */
    this.token = "642ce759-161a-4241-b10f-957a94c7305a";
    /**
     * Plaraforma
     * @type {string}
     */
    this.platform = "pc";
    /**
     * Nombre de usuario
     * @type {string}
     */
    this.user = "BLD SRGOBI";
    /**
     * Texto del footer
     * @type {string}
     */
    this.textFooter = "Generado con canvascard - fortnitetracker.com";
    /**
     * Texto AvengersKills
     * @type {string}
     */
    this.textAverageKills = "KILLS/MATCH";
    /**
     * Texto AverageKill
     * @type {string}
     */
    this.textAverageKill = "KILL/MATCH";
    /**
     * Texto Porcejtage victoria
     * @type {string}
     */
    this.textWPercent = "W%";
    /**
     * Texto Porcejtage victorias
     * @type {string}
     */
    this.textWinPercent = "WIN%";
    /**
     * Texto KD
     * @type {string}
     */
    this.textKD = "K/D";
    /**
     * Texto Victorias
     * @type {string}
     */
    this.textWins = "WINS";
    /**
     * Texto Victoria
     * @type {string}
     */
    this.textWin = "WIN";
    /**
     * Texto Kills
     * @type {string}
     */
    this.textKills = "KILLS";
    /**
     * Texto Kill
     * @type {string}
     */
    this.textKill = "KILL";
    /**
     * Texto Partidas jugadas
     * @type {string}
     */
    this.textMatches = "MATCHES";
    /**
     * Texto Partida jugada
     * @type {string}
     */
    this.textMatch = "MATCH";

    this.data = null;

  }

  async fetchPlayerData() {
    if (!this.token) return console.log("Ingrese un token válido fortnitetracker.com!");

    let fortniteClient = new fortnite(this.token);
    let user = this.user;
    let platform = this.platform.toLowerCase();
    if (platform !== "pc" && platform !== "xbl" && platform !== "psn") return false;
    let tdata = await fortniteClient.user(user, platform);
    this.data = tdata.code === 404 ? false : tdata
  }

  /**
   * Valor del Token
   * @param {string} value
   * @returns {FortniteStats}
   */
  setToken(value) {
    this.token = value;
    return this;
  }

  /**
   * Valor de la plataforma
   * @param {string} value
   * @returns {FortniteStats}
   */
  setPlatform(value) {
    this.platform = value;
    return this;
  }

  /**
   * Valor del usuario
   * @param {string} value
   * @returns {FortniteStats}
   */
  setUser(value) {
    this.user = value;
    return this;
  }

  /**
   * Valor del texto
   * @param {string} value
   * @returns {FortniteStats}
   */
  setText(variable, value) {
    const formattedVariable = formatVariable("text", variable);
    if (this[formattedVariable]) this[formattedVariable] = value;
    return this;
  }

  async toAttachment() {

    await this.fetchPlayerData();
    if (!this.data) return false;

    let canvas = Canvas.createCanvas(975, 650),
      ctx = canvas.getContext("2d");

    // Estadísticas de fondo
    let background = await Canvas.loadImage(`${__dirname}/../assets/img/fortnite/stats/background.png`);
    // Esto usa las dimensiones del lienzo para estirar la imagen en todo el lienzo.
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    let grd1 = ctx.createLinearGradient(0, 0, 210, 210);
    // Create gradient
    grd1.addColorStop(1, "#17c2fe");
    grd1.addColorStop(1, "#0682b1");
    let grd2 = ctx.createLinearGradient(0, 0, 370, 370);
    // Create gradient
    grd2.addColorStop(1, "#5cfc7b");
    grd2.addColorStop(1, "#41b057");
    let grd3 = ctx.createLinearGradient(0, 0, 520, 520);
    // Create gradient
    grd3.addColorStop(1, "#7037b2");
    grd3.addColorStop(1, "#512880");
    // Dibujar capas
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#15171a";
    ctx.fillRect(51, 28, 594, 114);
    ctx.fillStyle = "#1f1f1f";
    ctx.fillRect(51, 113, 594, 30);
    ctx.fillRect(671, 113, 258, 30);
    ctx.fillRect(41, 154, 277, 467);
    ctx.fillRect(351, 154, 277, 467);
    ctx.fillRect(661, 154, 277, 467);
    // Fill with gradient
    ctx.fillStyle = grd1;
    ctx.fillRect(51, 164, 257, 57);
    ctx.fillStyle = grd2;
    ctx.fillRect(361, 164, 257, 57);
    ctx.fillStyle = grd3;
    ctx.fillRect(671, 164, 257, 57);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(51, 221, 257, 4);
    ctx.fillRect(361, 221, 257, 4);
    ctx.fillRect(671, 221, 257, 4);
    ctx.fillRect(51, 296, 257, 4);
    ctx.fillRect(361, 296, 257, 4);
    ctx.fillRect(671, 296, 257, 4);
    ctx.fillRect(51, 373, 257, 4);
    ctx.fillRect(361, 373, 257, 4);
    ctx.fillRect(671, 373, 257, 4);
    ctx.fillRect(51, 451, 257, 4);
    ctx.fillRect(361, 451, 257, 4);
    ctx.fillRect(671, 451, 257, 4);
    ctx.fillRect(51, 529, 257, 4);
    ctx.fillRect(361, 529, 257, 4);
    ctx.fillRect(671, 529, 257, 4);
    ctx.fillRect(51, 605, 257, 4);
    ctx.fillRect(361, 605, 257, 4);
    ctx.fillRect(671, 605, 257, 4);
    ctx.globalAlpha = 1;
    // Dibujar xbox, pc or psn logo
    let iconPlatform = await Canvas.loadImage(`${__dirname}/../assets/img/fortnite/stats/${this.platform}.png`);
    ctx.drawImage(iconPlatform, 62, 43, 60, 60);
    // Dibujar corona logo
    let iconCrown = await Canvas.loadImage(`${__dirname}/../assets/img/fortnite/stats/crown.png`);
    ctx.drawImage(iconCrown, canvas.width - 280, 41, 60, 60);
    // Dibujar nombre de usuario
    ctx.fillStyle = "#ffffff";
    ctx.font = "50px Luckiest Guy";
    ctx.textAlign = "center";
    ctx.fillText(this.data.username, canvas.width - 630, canvas.height - 560);
    // El sorteo gana de por vida
    ctx.font = "60px Luckiest Guy";
    ctx.textAlign = "left";
    ctx.fillText(this.data.stats.lifetime.wins, canvas.width - 205, canvas.height - 557);
    // Dibuja asesinatos promedio, coincidencias y asesinatos de por vida
    ctx.textAlign = "center";
    ctx.font = "18px Roboto";
    if (this.data.stats.lifetime) {
      let averageKills = (this.data.stats.lifetime.kills / this.data.stats.lifetime.matches),
        averageKillsText = averageKills.toFixed(2) + " " + (averageKills > 1 ? this.textAverageKills : this.textAverageKill),
        lifetimeKillsText = this.data.stats.lifetime.kills + " " + (this.data.stats.lifetime.kills > 1 ? this.textKills : this.textKill),
        lifetimeMatchesText = this.data.stats.lifetime.matches + " " + (this.data.stats.lifetime.matches > 1 ? this.textMatches : this.textMatch);
      ctx.fillText(lifetimeMatchesText + " - " + lifetimeKillsText + " - " + averageKillsText, 350, canvas.height - 515);
    } else {
      let lifetimeKillsText = "0 " + this.textKills,
        averageKillsText = "0.00 " + this.textAverageKill,
        lifetimeMatchesText = "0 " + this.textMatch;
      ctx.fillText(lifetimeMatchesText + " - " + lifetimeKillsText + " - " + averageKillsText, 350, canvas.height - 515);
    }
    // Dibujar K / D y WIN% de por vida
    if (this.data.stats.lifetime) {
      let winsLifetimePercent = (this.data.stats.lifetime.wins / this.data.stats.lifetime.matches * 100);
      ctx.fillText(`${this.data.stats.lifetime.kd} ${this.textKD} - ${winsLifetimePercent.toFixed(2)} ${this.textWPercent}`, canvas.width - 174, canvas.height - 515);
    } else {
      let winsLifetimePercent = "0.00",
        statsLifetimeKD = "0";
      ctx.fillText(`${statsLifetimeKD} ${this.textKD} - ${winsLifetimePercent} ${this.textWPercent}`, canvas.width - 174, canvas.height - 515);
    }
    // Dibujar col solo: TITLE
    ctx.fillStyle = "#ffffff";
    ctx.font = "37px Burbank Big Condensed";
    ctx.fillText("SOLO", 176, canvas.height - 443);
    // Dibujar col solo : KD
    ctx.font = "26px Roboto";
    if (this.data.stats.solo) {
      ctx.fillText(this.data.stats.solo.kd + " " + this.textKD, 176, canvas.height - 375);
    } else {
      ctx.fillText("0 " + this.textKD, 176, canvas.height - 375);
    }
    // Dibujar col solo : WINS
    if (this.data.stats.solo) {
      if (this.data.stats.solo.wins > 1) {
        ctx.fillText(this.data.stats.solo.wins + " " + this.textWins, 176, canvas.height - 302);
      } else {
        ctx.fillText(this.data.stats.solo.wins + " " + this.textWin, 176, canvas.height - 302);
      }
    } else {
      ctx.fillText("0 " + this.textWin, 176, canvas.height - 302);
    }
    // Dibujar col solo : KILLS
    if (this.data.stats.solo) {
      if (this.data.stats.solo.kills > 1) {
        ctx.fillText(this.data.stats.solo.kills + " " + this.textKills, 176, canvas.height - 222);
      } else {
        ctx.fillText(this.data.stats.solo.kills + " " + this.textKill, 176, canvas.height - 222);
      }
    } else {
      ctx.fillText("0 " + this.textKill, 176, canvas.height - 222);
    }
    // Dibujar col solo : WIN%
    if (this.data.stats.solo) {
      let winsSoloPercent = (this.data.stats.solo.wins / this.data.stats.solo.matches * 100);
      ctx.fillText(winsSoloPercent.toFixed(2) + " " + this.textWinPercent, 176, canvas.height - 145);
    } else {
      ctx.fillText("0.00 " + this.textWinPercent, 176, canvas.height - 145);
    }
    // Dibujar col solo : MATCHES
    if (this.data.stats.solo) {
      if (this.data.stats.solo.matches > 1) {
        ctx.fillText(this.data.stats.solo.matches + " " + this.textMatches, 176, canvas.height - 67);
      } else {
        ctx.fillText(this.data.stats.solo.matches + " " + this.textMatch, 176, canvas.height - 67);
      }
    } else {
      ctx.fillText("0 " + this.textMatch, 176, canvas.height - 67);
    }
    // Dibujar col duo : TITLE
    ctx.fillStyle = "#ffffff";
    ctx.font = "37px Burbank Big Condensed";
    ctx.fillText("DUO", 485, canvas.height - 443);
    // Dibujar col duo : KD
    ctx.font = "26px Roboto";
    if (this.data.stats.duo) {
      ctx.fillText(this.data.stats.duo.kd + " " + this.textKD, 485, canvas.height - 375);
    } else {
      ctx.fillText("0 " + this.textKD, 485, canvas.height - 375);
    }
    // Dibujar col duo : WINS
    if (this.data.stats.duo) {
      if (this.data.stats.duo.wins > 1) {
        ctx.fillText(this.data.stats.duo.wins + " " + this.textWins, 485, canvas.height - 302);
      } else {
        ctx.fillText(this.data.stats.duo.wins + " " + this.textWin, 485, canvas.height - 302);
      }
    } else {
      ctx.fillText("0 " + this.textWin, 485, canvas.height - 302);
    }
    // Dibujar col duo : KILLS
    if (this.data.stats.duo) {
      if (this.data.stats.duo.kills > 1) {
        ctx.fillText(this.data.stats.duo.kills + " " + this.textKills, 485, canvas.height - 222);
      } else {
        ctx.fillText(this.data.stats.duo.kills + " " + this.textKill, 485, canvas.height - 222);
      }
    } else {
      ctx.fillText("0 " + this.textKill, 485, canvas.height - 222);
    }
    // Dibujar col duo : WIN%
    if (this.data.stats.duo) {
      let winsDuoPercent = (this.data.stats.duo.wins / this.data.stats.duo.matches * 100);
      ctx.fillText(winsDuoPercent.toFixed(2) + " " + this.textWinPercent, 485, canvas.height - 145);
    } else {
      ctx.fillText("0.00 " + this.textWinPercent, 485, canvas.height - 145);
    }
    // Dibujar col duo : MATCHES
    if (this.data.stats.duo) {
      if (this.data.stats.duo.matches > 1) {
        ctx.fillText(this.data.stats.duo.matches + " " + this.textMatches, 485, canvas.height - 67);
      } else {
        ctx.fillText(this.data.stats.duo.matches + " " + this.textMatch, 485, canvas.height - 67);
      }
    } else {
      ctx.fillText("0 " + this.textMatch, 485, canvas.height - 67);
    }
    // Dibujar col squad : TITLE
    ctx.fillStyle = "#ffffff";
    ctx.font = "37px Burbank Big Condensed";
    ctx.fillText("SQUAD", canvas.width - 174, canvas.height - 443);
    // Dibujar col squad : KD
    ctx.font = "26px Roboto";
    if (this.data.stats.squad) {
      ctx.fillText(this.data.stats.squad.kd + " " + this.textKD, canvas.width - 174, canvas.height - 375);
    } else {
      ctx.fillText("0 " + this.textKD, canvas.width - 174, canvas.height - 375);
    }
    // Dibujar col squad : WINS
    if (this.data.stats.squad) {
      if (this.data.stats.squad.wins > 1) {
        ctx.fillText(this.data.stats.squad.wins + " " + this.textWins, canvas.width - 174, canvas.height - 302);
      } else {
        ctx.fillText(this.data.stats.squad.wins + " " + this.textWin, canvas.width - 174, canvas.height - 302);
      }
    } else {
      ctx.fillText("0 " + this.textWin, canvas.width - 174, canvas.height - 302);
    }
    // Dibujar col squad : KILLS
    if (this.data.stats.squad) {
      if (this.data.stats.squad.kills > 1) {
        ctx.fillText(this.data.stats.squad.kills + " " + this.textKills, canvas.width - 174, canvas.height - 222);
      } else {
        ctx.fillText(this.data.stats.squad.kills + " " + this.textKill, canvas.width - 174, canvas.height - 222);
      }
    } else {
      ctx.fillText("0 " + this.textKill, canvas.width - 174, canvas.height - 222);
    }
    // Dibujar col squad : WIN%
    if (this.data.stats.squad) {
      let winsSquadPercent = (this.data.stats.squad.wins / this.data.stats.squad.matches * 100);
      ctx.fillText(winsSquadPercent.toFixed(2) + " " + this.textWinPercent, canvas.width - 174, canvas.height - 145);
    } else {
      ctx.fillText("0.00 " + this.textWinPercent, canvas.width - 174, canvas.height - 145);
    }
    // Dibujar col squad : MATCHES
    if (this.data.stats.squad) {
      if (this.data.stats.squad.matches > 1) {
        ctx.fillText(this.data.stats.squad.matches + " " + this.textMatches, canvas.width - 174, canvas.height - 67);
      } else {
        ctx.fillText(this.data.stats.squad.matches + " " + this.textMatch, canvas.width - 174, canvas.height - 67);
      }
    } else {
      ctx.fillText("0 " + this.textMatch, canvas.width - 174, canvas.height - 67);
    }
    // Dibujar pie de página
    ctx.font = "21px Roboto Black";
    ctx.fillText(this.textFooter, canvas.width / 2, canvas.height - 10);
    return canvas;
  }
};

module.exports = FortniteStats;