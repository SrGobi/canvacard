export = Greeting;
declare class Greeting {
    /**
     * Avatar de la tarjeta
     * @type {string}
     */
    avatar: string;
    /**
     * Título creado con Canvacard
     * @type {string}
     */
    titulo: string;
    /**
     * Subtítulo creado con Canvacard
     * @type {string}
     */
    subtitulo: string;
    /**
     * Color del título creado con Canvacard
     * @type {string}
     */
    colorTitulo: string;
    /**
     * Color del Subtítulo creado con Canvacard
     * @type {string}
     */
    colorSubtitulo: string;
    /**
     * Color del circulo
     * @type {string}
     */
    colorCircle: string;
    /**
     * Color del borde
     * @type {string}
     */
    colorBorder: string;
    /**
     * Color del fondo
     * @type {string}
     */
    colorBackground: string;
    /**
     * Sets color
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
import Canvas = require("@napi-rs/canvas");
//# sourceMappingURL=GreetingCard.d.ts.map