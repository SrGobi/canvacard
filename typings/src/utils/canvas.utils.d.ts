/**
 * Crea un canvas.
 * @param {number} width
 * @param {number} height
 * @returns {Canvas}
 */
export function createCanvasInstance(width: number, height: number): Canvas;
/**
 * Carga una imagen y maneja errores.
 * @param {string} imagePath
 * @returns {Promise<Image>}
 */
export function loadImageSafely(imagePath: string): Promise<new (width?: number, height?: number) => HTMLImageElement>;
//# sourceMappingURL=canvas.utils.d.ts.map