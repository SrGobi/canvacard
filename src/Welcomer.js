const { Base } = require("discord-canvascard");
const Util = require("./Util");

class Welcomer extends Base {

    /**
     * Welcome image builder
     * @see https://www.discord-canvas.net/functions/welcome
     * @example
     * const card = new canvacard.Welcomer()
            .setUsername("SrGobi")
            .setDiscriminator("0001")
            .setGuildName("Esp Customs");

        card.build()
            .then(data => {
                canvacard.write(data, "welcomer.png");
            })
     */
    constructor() {
        super();
        
        /**
         * Título creado con Canvacard
         * @type {string}
         */
        this.titulo = "WELCOME";

        /**
         * Mensaje de texto creado con Canvacard
         * @type {string}
         */
        this.subtitulo = "Welcome to {server}";

        /**
         * Color del título creado con canvacard
         * @type {string}
         */
        this.colorTitulo = "#03A9F4";
        
        // actualizar datos predeterminados
        this.__updateData();
    }

    /**
     * Actualiza el estado predeterminado
     * @private
     * @ignore
     */
     __updateData() {
        this.setAvatar(`https://cdn.discordapp.com/embed/avatars/0.png`);
        this.setBackground("COLOR", "#2c2f33" ||"IMAGE", `https://i.imgur.com/aClDVjh.jpg`);
        this.setTitulo("Titulo personalizable!");
        this.setSubtitulo("Subtitulo personalizable!");
        this.setColorTitulo("#FFFFFF");
        this.setColorSubtitulo("#5865f2");
        this.setColorCircle("#FFFFFF");
        this.setColorBorder("#000000");
        this.setOpacityBorder("0.4");
        this.setColor("border", "#4D5E94");
        this.setColor("titulo", "#4D5E94");
        this.setColor("subtitulo", "#4D5E94");
        this.setColor("avatar", "#4D5E94");
    }

    /**
     * Establecer color
     * @param {"titulo"|"titulo-border"|"titulo-box"|"subtitulo"|"subtitulo-border"|"subtitulo-box"|"avatar"|"background"|"border"} id
     * @param {string} color Código de color HTML5
     * @returns {Welcomer}
     */
    setColor(id, color) {
        super.setColor(id, color);
        return this;
    }

    /**
     * Establecer recuento de miembros
     * @param {number|string} memberCount Recuento de miembros del gremio
     * @returns {Welcomer}
     */
    setMemberCount(memberCount = 100) {
        super.setMemberCount(Util.toAbbrev(memberCount));
        return this;
    }

    /**
     * Crea una imagen de bienvenida
     * @returns {Promise<Buffer>}
     */
    async build() {
        return (await this.toAttachment()).toBuffer();
    }

}

module.exports = Welcomer;