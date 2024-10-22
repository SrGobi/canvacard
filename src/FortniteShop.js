const { createCanvas, loadImage } = require("@napi-rs/canvas");
const fs = require("fs");
const APIError = require("./utils/error.utils");
const formatVariable = require("./utils/formatVariable.utils");
const parseSvg = require("./utils/parseSvg.utils");

/**
 * Creador de tiene de artículos de Fortnite
 */
class FortniteShop {
  /**
   * <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/fortnite_shop.png" alt="Fortnite Shop Card Preview">
   * 
   * Para obtener un token de la API de Fortnite, visite [fortnite-api.com](https://fortnite-api.com/)
   * 
   * @example
   * ```js
    const shop = new canvacard.FortniteShop()
		.setToken("f4a26b940ef54a9a4238cef040bd08fa9001cd6c")
		.setText("footer", "ESP CUSTOMS X FORTNITE")

	  const FortniteShopImage = await shop.build("Luckiest Guy");
	  canvacard.write(FortniteShopImage, "./fortnite_shop.png");
   * ```
   */
  constructor() {
    this.token = "f4a26b940ef54a9a4238cef040bd08fa9001cd6c";
    this.textHeader = "TIENDA DE ARTÍCULOS FORTNITE";
    this.textFooter = "Generado con canvascard";
    this.options = { lang: "es", dateFormat: "dddd, MMMM Do YYYY" };
  }

  /**
   * Establecer el token de la API de Fortnite
   * @param {string} value Token de la API de Fortnite
   * @returns {FortniteShop} La instancia actual de FortniteShop
   */
  setToken(value) {
    this.token = value;
    return this;
  }

  /**
   * Establecer el texto del encabezado
   * @param {string} value Texto del encabezado
   * @returns {FortniteShop} La instancia actual de FortniteShop
   */
  setText(variable, value) {
    const formattedVariable = formatVariable("text", variable);
    if (this[formattedVariable]) this[formattedVariable] = value;
    return this;
  }

  /**
   * Construir la tarjeta de la tienda de Fortnite
   * @param {string} [font="Arial"] Fuente de texto para la tarjeta
   * @returns {Promise<Buffer>} Imagen de la tarjeta de la tienda de Fortnite
   * @throws {APIError} Si no se puede obtener la información de la tienda
   */
  async build(font = "Arial") {
    if (!this.token) return console.log("Por favor ingrese un token válido para fortnite-api.com!");

    const shopRequest = await fetch("https://fortnite-api.com/v2/shop/br/combined?language=es", {
      headers: { "x-api-key": this.token }
    });

    if (!shopRequest.ok) throw new APIError("Error al obtener datos de la tienda: " + shopRequest.statusText);

    const shopData = await shopRequest.json();
    const entries = shopData.data.featured.entries;

    // Crear un nuevo arreglo para los ítems
    let items = [];
    const existingItemsSet = new Set(); // Usar Set para evitar duplicados

    for (const entry of entries) {
      if (entry.bundle) {
        // Si es un lote, obtener el primer ítem del lote para la rareza
        const bundle = entry.bundle;
        const firstItem = entry.items[0]; // Obtener el primer ítem

        // Agregar el lote al arreglo, usando la rareza del primer ítem
        items.push({
          name: bundle.name,
          type: bundle.info,
          images: bundle.image,
          regularPrice: entry.regularPrice,
          finalPrice: entry.finalPrice,
          rarity: firstItem?.rarity || { backendValue: 'EFortRarity::Common' } // Agregar rareza del primer ítem o valor por defecto
        });
      } else {
        // Si es un artículo suelto, agregar solo el artículo
        entry.items.forEach(item => {
          if (!existingItemsSet.has(item.name)) {
            existingItemsSet.add(item.name);
            items.push({
              name: item.name,
              type: "Article",
              rarity: item.rarity,
              images: item.images?.icon || item.images?.smallIcon || item.images?.featured,
              finalPrice: entry.finalPrice // Añadir el precio al objeto del ítem
            });
          }
        });
      }
    }

    // Ordenar los ítems por finalPrice (de menor a mayor)
    items.sort((a, b) => b.finalPrice - a.finalPrice);

    const itemsPerRow = 8; // Máximo 8 ítems por fila
    const maxRows = 10;    // Máximo 10 filas
    const itemWidth = 384; // Ancho de cada ítem
    const itemHeight = 384; // Alto de cada ítem
    const padding = 15;    // Espacio entre los ítems
    const canvasWidth = itemsPerRow * itemWidth + (itemsPerRow - 1) * padding;
    const canvasHeight = maxRows * itemHeight + (maxRows - 1) * padding + 300;  // Ajuste extra para encabezado

    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext("2d");

    // Crear un gradiente radial circular azul
    const gradient = ctx.createRadialGradient(
      canvasWidth / 2,   // Centro X del gradiente
      canvasHeight / 2,  // Centro Y del gradiente
      0,                 // Radio inicial (0 para comenzar en un punto)
      canvasWidth / 2,   // Centro X del gradiente
      canvasHeight / 2,  // Centro Y del gradiente
      canvasWidth    // Radio final ajustado al ancho del canvas
    );
    gradient.addColorStop(0, '#0064BD');  // Azul claro (SkyBlue)
    gradient.addColorStop(1, '#001E8E');  // Azul oscuro

    // Aplicar el gradiente como fondo
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Dibujar encabezado
    ctx.fillStyle = "#ffffff";
    ctx.font = `70px ${font}`;
    ctx.textAlign = "center";
    ctx.fillText(this.textHeader, canvas.width / 2, 100);

    // Inicializar variables de posición
    let currentRow = 0;
    let currentColumn = 0;

    // Iterar sobre los ítems y dibujarlos en el canvas
    for (const item of items) {
      try {
        const { name, type, rarity, images, finalPrice } = item;

        // Calcular la posición del ítem basado en la columna y fila actual
        const x = currentColumn * (itemWidth + padding);
        const y = 200 + currentRow * (itemHeight + padding);

        // Obtener colores según rareza
        const rarityColors = this.getRarityColors(rarity.backendValue || 'EFortRarity::Common');

        // Dibujar el fondo del ítem
        ctx.fillStyle = rarityColors.colorCenter;

        ctx.fillRect(x, y, itemWidth, itemHeight);  // Fondo para el artículo

        ctx.beginPath();

        // Cargar y dibujar la imagen del ítem o del lote
        const itemIcon = await loadImage(images);

        // Si es un artículo suelto
        ctx.drawImage(itemIcon, x, y, itemWidth, itemHeight);

        ctx.globalAlpha = 1;
        ctx.closePath();
        ctx.save();

        ctx.beginPath();
        const overlay = await loadImage(`${__dirname}/../assets/img/fortnite/shop/SmallOverlay.png`);
        ctx.drawImage(overlay, x, y, itemWidth, itemHeight);

        ctx.closePath();
        ctx.save();

        ctx.globalAlpha = 1;

        // Ajustar el nombre del ítem (lote o artículo)
        this.drawItemName(ctx, name, x + 196, y + 310, 375, font);

        // Ajustar el precio dentro del área de la tarjeta
        await this.drawItemPrice(ctx, finalPrice, x + 192, y + 340, 200, font);

        currentColumn++;

        // Si alcanzamos el máximo número de columnas, pasar a la siguiente fila
        if (currentColumn >= itemsPerRow) {
          currentColumn = 0;
          currentRow++;

          // Si alcanzamos el máximo número de filas, terminamos
          if (currentRow >= maxRows) break;
        }
      } catch (error) {
        console.error("Error al procesar el ítem:", item, error);
        // Saltar el ítem que tiene un error y continuar con el siguiente
        continue;
      }
    }

    // Pie de página
    ctx.font = `50px ${font}`;
    ctx.fillText(this.textFooter, canvas.width / 2, canvas.height - 50);

    // Guardar la imagen
    const outputPath = `${__dirname}/../assets/img/fortnite/shop/output.png`;
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outputPath, buffer);

    return canvas.toBuffer("image/png");
  }

  // Función para obtener un valor numérico según la rareza del ítem
  getRarityValue(rarity) {
    const rarityValues = {
      "EFortRarity::Legendary": 5,
      "EFortRarity::Epic": 4,
      "EFortRarity::Rare": 3,
      "EFortRarity::Uncommon": 2,
      "EFortRarity::Common": 1
    };
    return rarityValues[rarity] || 0; // Usar 0 por defecto si no se encuentra
  }

  // Función para obtener colores según la rareza del ítem
  getRarityColors(rarity) {
    const rarities = {
      "EFortRarity::Legendary": { colorBorder: "#e98d4b", colorCenter: "#ea8d23" },
      "EFortRarity::Epic": { colorBorder: "#e95eff", colorCenter: "#c359ff" },
      "EFortRarity::Rare": { colorBorder: "#37d1ff", colorCenter: "#2cc1ff" },
      "EFortRarity::Uncommon": { colorBorder: "#87e339", colorCenter: "#69bb1e" },
      "EFortRarity::Common": { colorBorder: "#b1b1b1", colorCenter: "#bebebe" }
    };
    return rarities[rarity] || rarities.common;  // Usar común por defecto
  }

  // Función para dividir el nombre en dos líneas si es necesario
  drawItemName(ctx, text, x, y, maxWidth, font) {
    ctx.font = `30px ${font}`;
    ctx.fillStyle = "#ffffff";

    const words = text.split(' ');
    let line = '';
    let lineHeight = 30;
    let lineCount = 0;
    const maxLines = 2; // Máximo 2 líneas

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && lineCount < maxLines - 1) {
        ctx.fillText(line, x, y);
        line = words[i] + ' ';
        y += lineHeight;
        lineCount++;
      } else {
        line = testLine;
      }
    }
    // Dibujar la última línea
    ctx.fillText(line, x, y);
  }

  // Función para ajustar el precio dentro de la tarjeta
  async drawItemPrice(ctx, price, x, y, maxWidth, font) {
    const vbuckIcon = await loadImage(parseSvg(`${__dirname}/../assets/img/fortnite/shop/vBucks.svg`));
    const iconSize = 20;

    // Dibujar el ícono de V-Bucks
    ctx.drawImage(vbuckIcon, x - 40, y + 10, iconSize, iconSize);

    // Dibujar el precio ajustado al ancho disponible
    ctx.font = `30px ${font}`;
    ctx.fillStyle = "#ffffff";
    let priceText = `${price}`;
    const priceWidth = ctx.measureText(priceText).width;

    // Si el precio excede el espacio disponible, ajustar el tamaño de la fuente
    if (priceWidth > maxWidth - iconSize - 10) {
      let fontSize = 30;
      do {
        fontSize -= 1;
        ctx.font = `${fontSize}px ${font}`;
      } while (ctx.measureText(priceText).width > maxWidth - iconSize - 10);
    }

    // Dibujar el texto del precio
    ctx.fillText(priceText, x + iconSize, y + 30);
  }
}

module.exports = FortniteShop;