export = Rank;
/**
 * @typedef {object} CanvacardRankData
 * @property {number} width Ancho de la tarjeta de rango
 * @property {number} height Altura de la tarjeta de rango
 * @property {object} background Datos de antecedentes de la tarjeta de rango
 * @property {"image"|"color"} [background.type="color"] Tipo de fondo
 * @property {string|Buffer} [background.image="#23272A"] Imagen de fondo (o color)
 * @property {object} progressBar Datos de la barra de progreso
 * @property {boolean} [progressBar.rounded=true] Si la barra de progreso debe redondearse
 * @property {number} [progressBar.x=275.5] Barra de progreso X
 * @property {number} [progressBar.y=183.75] Barra de progreso Y
 * @property {number} [progressBar.height=37.5] Altura de la barra de progreso
 * @property {number} [progressBar.width=596.5] Ancho de la barra de progreso
 * @property {object} [progressBar.track] Pista de la barra de progreso
 * @property {string} [progressBar.track.color="#484b4E"] Color de la pista de la barra de progreso
 * @property {object} [progressBar.bar] Datos de la barra de progreso
 * @property {"color"|"gradient"} [progressBar.bar.type="color"] Tipo de barra de progreso
 * @property {string|string[]} [progressBar.bar.color="#FFFFFF"] Color de la barra de la barra de progreso
 * @property {object} overlay Superposición de la barra de progreso
 * @property {boolean} [overlay.display=true] Si debería mostrar superposición
 * @property {number} [overlay.level=0.5] Nivel de opacidad de superposición
 * @property {string} [overlay.color="#333640"] Superposición de color de fondo
 * @property {object} avatar Datos de avatar de la tarjeta de rango
 * @property {string|Buffer} [avatar.source=null] Fuente de avatar
 * @property {number} [avatar.x=70] X
 * @property {number} [avatar.y=50] Y
 * @property {number} [avatar.height=180] altura
 * @property {number} [avatar.width=180] ancho
 * @property {object} status Estado de la tarjeta de rango
 * @property {number} [status.width=5] Ancho de estado
 * @property {"online"|"dnd"|"idle"|"offline"|"streaming"} [status.type] Tipo de estado
 * @property {string} [status.color="#43B581"] Color de estado
 * @property {boolean} [status.circle=false] ¿Estado circular?
 * @property {object} rank Datos de rango de la tarjeta de clasificación
 * @property {boolean} [rank.display=true] Si debe mostrar rango
 * @property {number} [rank.data=1] El rango
 * @property {string} [rank.textColor="#FFFFFF"] Rango de color del texto
 * @property {string} [rank.color="#F3F3F3"] Color de rango
 * @property {string} [rank.displayText="RANK"] Texto de visualización de rango
 * @property {object} level Datos de nivel de tarjeta de rango
 * @property {boolean} [level.display=true] Si debería mostrar el nivel
 * @property {number} [level.data=1] El nivel
 * @property {string} [level.textColor="#FFFFFF"] color de texto de nivel
 * @property {string} [level.color="#F3F3F3"] color de nivel
 * @property {string} [level.displayText="LEVEL"] texto de visualización de nivel
 * @property {object} currentXP Tarjeta de rango xp actual
 * @property {number} [currentXP.data=0] XP actual
 * @property {string} [currentXP.color="#FFFFFF"] Carta de rango color xp actual
 * @property {object} requiredXP Tarjeta de rango requerida xp
 * @property {number} [requiredXP.data=0] requerido xp
 * @property {string} [requiredXP.color="#FFFFFF"] Se requiere tarjeta de rango xp color
 * @property {object} discriminator Discriminador de cartas de rango
 * @property {number|string} [discriminator.discrim=null] El discriminador
 * @property {string} [discriminator.color="rgba(255, 255, 255, 0.4)"] Color del discriminador de la tarjeta de rango
 * @property {object} username Datos de nombre de usuario
 * @property {string} [username.name=null] Nombre de usuario de la tarjeta de clasificación
 * @property {string} [username.color="#FFFFFF"] Color de nombre de usuario de la tarjeta de rango
 * @property {boolean} [renderEmojis=true] Si debería renderizar emojis
 */
declare class Rank {
    /**
     * Datos de la tarjeta de clasificación
     * @type {CanvacardRankData}
     */
    data: CanvacardRankData;
    /**
     * Cargar fuentes
     * @param {any[]} fontArray Matriz de fuentes
     * @returns {Rank}
     */
    registerFonts(fontArray?: any[]): Rank;
    /**
     * Si debe representar el nombre de usuario con emojis (si corresponde)
     * @param {boolean} [apply=true] Configúrelo en "verdadero" para renderizar emojis.
     * @returns {Rank}
     */
    renderEmojis(apply?: boolean): Rank;
    /**
     * Establecer nombre de usuario
     * @param {string} name Nombre de usuario
     * @param {string} color Color del nombre de usuario
     * @returns {Rank}
     */
    setUsername(name: string, color?: string): Rank;
    /**
     * Establecer discriminador
     * @param {string|number} discriminator Discriminador de usuario
     * @param {string} color Color discriminador
     * @returns {Rank}
     */
    setDiscriminator(discriminator: string | number, color?: string): Rank;
    /**
     * Establecer el estilo de la barra de progreso
     * @param {string|string[]} color Color de la barra de progreso
     * @param {"COLOR"|"GRADIENT"} [fillType] Tipo de barra de progreso
     * @param {boolean} [rounded=true] Si la barra de progreso debe tener bordes redondeados
     * @returns {Rank}
     */
    setProgressBar(color: string | string[], fillType?: "COLOR" | "GRADIENT", rounded?: boolean): Rank;
    /**
     * Establecer pista de la barra de progreso
     * @param {string} color Color de la pista
     * @returns {Rank}
     */
    setProgressBarTrack(color: string): Rank;
    /**
     * Establecer superposición de tarjetas
     * @param {string} color Color de superposición
     * @param {number} [level=0.5] Nivel de opacidad
     * @param {boolean} [display=true] SI debería mostrar superposición
     * @returns {Rank}
     */
    setOverlay(color: string, level?: number, display?: boolean): Rank;
    /**
     * Establecer xp requerido
     * @param {number} data Requerido xp
     * @param {string} color Color
     * @returns {Rank}
     */
    setRequiredXP(data: number, color?: string): Rank;
    /**
     * Establecer xp actual
     * @param {number} data XP actual
     * @param {string} color Color
     * @returns {Rank}
     */
    setCurrentXP(data: number, color?: string): Rank;
    /**
     * Establecer rango
     * @param {number} data Posición actual
     * @param {string} text Mostrar texto
     * @param {boolean} [display=true] Si debe mostrar rango
     * @returns {Rank}
     */
    setRank(data: number, text?: string, display?: boolean): Rank;
    /**
     * Establecer color de visualización de rango
     * @param {string} text color de texto
     * @param {string} number Color del número
     * @returns {Rank}
     */
    setRankColor(text?: string, number?: string): Rank;
    /**
     * Establecer color de nivel
     * @param {string} text color de texto
     * @param {string} number color del número
     * @returns {Rank}
     */
    setLevelColor(text?: string, number?: string): Rank;
    /**
     * Establecer nivel
     * @param {number} data Nivel actual
     * @param {string} text Mostrar texto
     * @param {boolean} [display=true] Si debería mostrar el nivel
     * @returns {Rank}
     */
    setLevel(data: number, text?: string, display?: boolean): Rank;
    /**
     * Establecer color de estado personalizado
     * @param {string} color Color para establecer
     * @returns {Rank}
     */
    setCustomStatusColor(color: string): Rank;
    /**
     * Establecer estado
     * @param {"online"|"idle"|"dnd"|"offline"|"streaming"} status Estatus de usuario
     * @param {boolean} circle Si el icono de estado debe ser circular.
     * @param {number|boolean} width Ancho de estado
     * @returns {Rank}
     */
    setStatus(status: "online" | "idle" | "dnd" | "offline" | "streaming", circle?: boolean, width?: number | boolean): Rank;
    /**
     * Establecer imagen / color de fondo
     * @param {"COLOR"|"IMAGE"} type Tipo de fondo
     * @param {string|Buffer} [data] Color o imagen de fondo
     * @returns {Rank}
     */
    setBackground(type: "COLOR" | "IMAGE", data?: string | Buffer): Rank;
    /**
     * Avatar de usuario
     * @param {string|Buffer} data Datos de avatar
     * @returns {Rank}
     */
    setAvatar(data: string | Buffer): Rank;
    /**
     * Construye carta de rango
     * @param {object} ops Fuentes
     * @param {string} [ops.fontX="Manrope"] Familia tipográfica Bold
     * @param {string} [ops.fontY="Manrope"] Familia tipográfica regular
     * @returns {Promise<Buffer>}
     */
    build(ops?: {
        fontX?: string;
        fontY?: string;
    }): Promise<Buffer>;
    /**
     * Calcula el progreso
     * @type {number}
     * @private
     * @ignore
     */
    private get _calculateProgress();
}
declare namespace Rank {
    export { CanvacardRankData };
}
type CanvacardRankData = {
    /**
     * Ancho de la tarjeta de rango
     */
    width: number;
    /**
     * Altura de la tarjeta de rango
     */
    height: number;
    /**
     * Datos de antecedentes de la tarjeta de rango
     */
    background: {
        type?: "image" | "color";
        image?: string | Buffer;
    };
    /**
     * Datos de la barra de progreso
     */
    progressBar: {
        rounded?: boolean;
        x?: number;
        y?: number;
        height?: number;
        width?: number;
        track?: {
            color?: string;
        };
        bar?: {
            type?: "color" | "gradient";
            color?: string | string[];
        };
    };
    /**
     * Superposición de la barra de progreso
     */
    overlay: {
        display?: boolean;
        level?: number;
        color?: string;
    };
    /**
     * Datos de avatar de la tarjeta de rango
     */
    avatar: {
        source?: string | Buffer;
        x?: number;
        y?: number;
        height?: number;
        width?: number;
    };
    /**
     * Estado de la tarjeta de rango
     */
    status: {
        width?: number;
        type?: "online" | "dnd" | "idle" | "offline" | "streaming";
        color?: string;
        circle?: boolean;
    };
    /**
     * Datos de rango de la tarjeta de clasificación
     */
    rank: {
        display?: boolean;
        data?: number;
        textColor?: string;
        color?: string;
        displayText?: string;
    };
    /**
     * Datos de nivel de tarjeta de rango
     */
    level: {
        display?: boolean;
        data?: number;
        textColor?: string;
        color?: string;
        displayText?: string;
    };
    /**
     * Tarjeta de rango xp actual
     */
    currentXP: {
        data?: number;
        color?: string;
    };
    /**
     * Tarjeta de rango requerida xp
     */
    requiredXP: {
        data?: number;
        color?: string;
    };
    /**
     * Discriminador de cartas de rango
     */
    discriminator: {
        discrim?: number | string;
        color?: string;
    };
    /**
     * Datos de nombre de usuario
     */
    username: {
        name?: string;
        color?: string;
    };
    /**
     * Si debería renderizar emojis
     */
    renderEmojis?: boolean;
};
//# sourceMappingURL=Rank.d.ts.map