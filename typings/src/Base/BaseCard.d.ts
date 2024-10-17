export = BaseCard;
/**
 * Clase base para generar tarjetas personalizables (usada en tarjetas de bienvenida y despedida).
 */
declare class BaseCard {
    avatar: string;
    titulo: string;
    subtitulo: string;
    colorTitulo: string;
    colorSubtitulo: string;
    colorCircle: string;
    colorBorder: string;
    colorBackground: string;
    data: {
        backgroundGlobal: {
            type: string;
            image: string;
        };
    };
    /**
     * Establece el color de un componente de la tarjeta.
     * @param {string} variable - El componente al que se aplicará el color (ej. 'titulo', 'subtitulo').
     * @param {string} value - El color en formato hexadecimal.
     * @returns {BaseCard}
     */
    setColor(variable: string, value: string): BaseCard;
    /**
     * Establece el texto de un componente de la tarjeta.
     * @param {string} variable - El componente al que se aplicará el texto (ej. 'titulo', 'subtitulo').
     * @param {string} value - El texto a mostrar.
     * @returns {BaseCard}
     */
    setText(variable: string, value: string): BaseCard;
    /**
     * Establece la opacidad de un componente de la tarjeta.
     * @param {string} variable - El componente al que se aplicará la opacidad.
     * @param {number} value - El valor de la opacidad.
     * @returns {BaseCard}
     */
    setOpacity(variable: string, value: number): BaseCard;
    /**
     * Genera la tarjeta como un lienzo de imagen.
     * @returns {Promise<Canvas>}
     */
    generateCard(): Promise<Canvas>;
}
//# sourceMappingURL=BaseCard.d.ts.map