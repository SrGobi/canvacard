const { Base } = require("discord-canvascard");
const Util = require("./Util");

class Leaver extends Base {

    /**
     * Creador de imágenes de abandono
     * @example
     * const card = new canvacard.Leaver()
            .setUsername("SrGobi")
            .setDiscriminator("5100")
            .setGuildName("SrGobi Studio");

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
        this.textTitle = "GOODBYE";

        /**
         * Mensaje de texto creado con Canvacard
         * @type {string}
         */
        this.textMessage = "¡Te extrañaremos!";

        /**
         * Color del título creado con canvacard
         * @type {string}
         */
        this.colorTitle = "#03A9F4";

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
        this.setUsername("Discord User");
        this.setDiscriminator("0000");
        this.setMemberCount(100);
        this.setGuildName("Discord Server");
        this.setAvatar(`https://cdn.discordapp.com/embed/avatars/0.png`);
        this.setColor("border", "#ff4a4a");
        this.setColor("username-box", "#ff4a4a");
        this.setColor("discriminator-box", "#ff4a4a");
        this.setColor("message-box", "#ff4a4a");
        this.setColor("title", "#ff4a4a");
        this.setColor("avatar", "#ff4a4a");
    }

    /**
     * Establecer color
     * @param {"title"|"title-border"|"avatar"|"username"|"username-box"|"hashtag"|"discriminator"|"discriminator-box"|"message"|"message-box"|"member-count"|"background"|"border"} id
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