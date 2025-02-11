const { Base } = require("discord-canvascard");
const Util = require("./Util");

class Leaver extends Base {

    /**
     * Creador de imágenes de abandono
     * @example
     * const card = new canvacard.Leaver()
            .setTitulo("Titulo personalizable");
            .setSubtitulo("Descripcion personalizable");

        card.build()
            .then(data => {
                canvacard.write(data, "leaver.png");
            })
     */
    constructor() {
        super();

        /**
         * Título creado con Canvacard
         * @type {string}
         */
        this.Titulo = "GOODBYE";

        /**
         * Mensaje de texto creado con Canvacard
         * @type {string}
         */
        this.Subtitulo = "¡Te extrañaremos!";

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
     * @returns {void}
     * @private
     * @ignore
     */
    __updateData() {
        this.setAvatar(`https://cdn.discordapp.com/embed/avatars/0.png`);
        this.setBackground("COLOR", "#2c2f33" ||"IMAGE", `https://i.imgur.com/aClDVjh.jpg`);
        this.setTitulo("Titulo personalizable!")
        this.setSubtitulo("Subtitulo personalizable!")
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
     * @returns {Leaver}
     */
    setColor(id, color) {
        super.setColor(id, color);
        return this;
    }

    /**
     * Recuento de miembros de ser
     * @param {number|string} memberCount Recuento de miembros del gremio
     * @returns {Leaver}
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

module.exports = Leaver;