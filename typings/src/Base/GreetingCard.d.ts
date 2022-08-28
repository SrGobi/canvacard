export = Greeting;
declare class Greeting {
    data: {
        backgroundGlobal: {
            type: string;
            image: string;
        };
    };
    avatar: string;
    titulo: string;
    subtitulo: string;
    colorTitulo: string;
    colorSubtitulo: string;
    colorCircle: string;
    colorBorder: string;
    opacityBorder: string;
    colorBackground: string;
    /**
     * Set Avatar
     * @param {string|Buffer} value
     * @returns {Greeting}
     */
    setAvatar(value: string | Buffer): Greeting;
    /**
     * Set Titulo
     * @param {string} value
     * @returns {Greeting}
     */
    setTitulo(value: string): Greeting;
    /**
     * Set Subtitulo
     * @param {string} value
     * @returns {Greeting}
     */
    setSubtitulo(value: string): Greeting;
    /**
     * Set Color de Titulo
     * @param {string} value
     * @returns {Greeting}
     */
    setColorTitulo(value: string): Greeting;
    /**
     * Set Color de Subtitulo
     * @param {string} value
     * @returns {Greeting}
     */
    setColorSubtitulo(value: string): Greeting;
    /**
     * Set Color de circulo de avatar
     * @param {string} value
     * @returns {Greeting}
     */
    setColorCircle(value: string): Greeting;
    /**
     * Set Color borde de la tarjeta
     * @param {string} value
     * @returns {Greeting}
     */
    setColorBorder(value: string): Greeting;
    /**
     * Set Opacidad de borde de la tarjeta
     * @param {string} value
     * @returns {Greeting}
     */
    setOpacityBorder(value: string): Greeting;
    /**
     * Establecer imagen / color de fondo
     * @param {"COLOR"|"IMAGE"} type Tipo de fondo
     * @param {string|Buffer} [data] Color o imagen de fondo
     */
    setBackground(type: "COLOR" | "IMAGE", data?: string | Buffer): Greeting;
    /**
     * Sets colors
     * @param {string} variable variable La variable para establecer el color en
     * @param {string} value value El color
     * @returns {Greeting}
     */
    setColor(variable: string, value: string): Greeting;
    /**
     * Sets text
     * @param {string} variable variable La variable para establecer el texto en
     * @param {string} value value El texto
     * @returns {Greeting}
     */
    setText(variable: string, value: string): Greeting;
    /**
     * Sets Opacity
     * @param {string} variable varible La variable para establecer la opacidad en
     * @param {number} value value La opacidad
     * @returns {Greeting}
     */
    setOpacity(variable: string, value: number): Greeting;
    toAttachment(): Promise<Canvas.Canvas>;
}
import Canvas = require("canvas");
//# sourceMappingURL=GreetingCard.d.ts.map