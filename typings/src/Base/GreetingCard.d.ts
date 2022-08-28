export = Greeting;
declare class Greeting {
    avatar: string;
    titulo: string;
    subtitulo: string;
    colorTitulo: string;
    colorSubtitulo: string;
    colorCircle: string;
    colorBorder: string;
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
import Canvas = require("canvas");
//# sourceMappingURL=GreetingCard.d.ts.map