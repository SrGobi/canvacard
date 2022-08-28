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
    setAvatar(value: any): Greeting;
    setTitulo(value: any): Greeting;
    setSubtitulo(value: any): Greeting;
    setColorTitulo(value: any): Greeting;
    setColorSubtitulo(value: any): Greeting;
    setColorCircle(value: any): Greeting;
    setColorBorder(value: any): Greeting;
    setOpacityBorder(value: any): Greeting;
    /**
     * Establecer imagen / color de fondo
     * @param {"COLOR"|"IMAGE"} type Tipo de fondo
     * @param {string|Buffer} [data] Color o imagen de fondo
     */
    setBackground(type: "COLOR" | "IMAGE", data?: string | Buffer): Greeting;
    setColor(variable: any, value: any): Greeting;
    setText(variable: any, value: any): Greeting;
    setOpacity(variable: any, value: any): Greeting;
    toAttachment(): Promise<Canvas.Canvas>;
}
import Canvas = require("canvas");
//# sourceMappingURL=GreetingCard.d.ts.map