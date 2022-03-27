module.exports = {

    /**
     * Obtiene variables y tipos
     * @param {object} prefix El tipo de variable
     * @param {object} variable La variable a cambiar
     * @returns La variable formateada
     */
    formatVariable(prefix, variable){
        const formattedVariable = variable.toLowerCase()
        .split("-").map((word) => word.charAt(0).toUpperCase()+word.substr(1, word.length).toLowerCase()).join("");
        return prefix+formattedVariable;
    },
    
    /**
     * Obtiene variables y tipos
     * @param {object} canvas El lienzo
     * @param {object} text El texto
     * @param {object} defaultFontSize El tamaño de píxel de fuente predeterminado
     * @param {object} width El ancho máximo del texto
     * @param {object} font La fuente del texto
     * @returns La variable formateada
     */
    applyText(canvas, text, defaultFontSize, width, font){
        const ctx = canvas.getContext("2d");
        do {
            ctx.font = `${(defaultFontSize -= 1)}px ${font}`;
        } while (ctx.measureText(text).width > width);
        return ctx.font;
    }

};