const { createCanvas, loadImage } = require("@napi-rs/canvas");
const fs = require("fs");
const APIError = require("./utils/error.utils");
const formatVariable = require("./utils/formatVariable.utils");
const parseSvg = require("./utils/parseSvg.utils");
const formatAndValidateHex = require("./utils/formatAndValidateHex.utils");

/**
 * @kind class
 * @description Fortnite Shop card creator
 * <details open>
 *  <summary>PREVIEW</summary>
 * <br>
 *   <a>
 *     <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/fortnite_shop.png" alt="Fortnite Shop Card Preview">
 *   </a>
 * </details>
 * 
 * To obtain a Fortnite API token, visit [fortnite-api.com](https://fortnite-api.com/)
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
class FortniteShop {
  constructor() {
    this.token = ""; // Requiere token válido
    this.textHeader = "FORTNITE ITEMS SHOP";
    this.textFooter = "Generated with canvascard";
    this.options = { lang: "es", dateFormat: "dddd, MMMM Do YYYY" };
    this.rows = 8;
  }

  /**
   * @method setToken
   * @name setToken
   * @description Set the Fortnite API token
   * @param {string} value Fortnite API token
   * @returns {FortniteShop} The current instance of FortniteShop
   * @throws {APIError} If the value is not a string
   */
  setToken(value) {
    if (!value || typeof value !== "string") throw new APIError("Please provide a valid token for fortnite-api.com!");
    this.token = value;
    return this;
  }

  /**
   * @method setRows
   * @name setRows
   * @description Set the number of rows for the Fortnite Shop card
   * @param {number} value Number of rows to set for the card
   * @returns {FortniteShop} The current instance of FortniteShop
   * @throws {APIError} If the value is not a number
   */
  setRows(value) {
    if (!value || typeof value !== "number") throw new APIError("Please provide a valid number of rows for fortnite-api.com!");
    this.rows = value;
    return this;
  }

  /**
   * @method setText
   * @name setText
   * @description Set the text for the Fortnite Shop card
   * @param {string} value Text to set for the card
   * @returns {FortniteShop} The current instance of FortniteShop
   * @throws {APIError} If the value is not a string
   */
  setText(variable, value) {
    if (typeof value !== "string") throw new APIError("The value must be a text string!");
    const formattedVariable = formatVariable("text", variable);
    if (this[formattedVariable]) this[formattedVariable] = value;
    return this;
  }

  /**
   * @method build
   * @name build
   * @description Build the Fortnite Shop card
   * @param {string} [font="Arial"] Font to use for the card
   * @returns {Promise<Buffer>} Card image in buffer format
   * @throws {APIError} If the token is not provided
   */
  async build(font = "Arial") {
    if (!this.token) throw new APIError("Please provide a valid token for fortnite-api.com!");

    const shopRequest = await fetch("https://fortnite-api.com/v2/shop?language=es", {
      headers: { "x-api-key": this.token }
    });

    if (!shopRequest.ok) throw new APIError("Error al obtener datos de la tienda: " + shopRequest.statusText);

    const shopData = await shopRequest.json();
    const entries = shopData.data.entries || [];

    // Process items same as before
    let items = [];
    for (const entry of entries) {
      if (entry.bundle) {
        items.push({
          type: "bundle",
          name: entry.bundle.name,
          image: entry.bundle.image,
          price: entry.finalPrice,
          section: entry.section?.name || "Featured",
          colors: entry.colors // Colors for gradient
        });
      } else if (entry.brItems) {
        const itemData = entry.brItems.map(item => ({
          type: "item",
          name: item.name,
          description: item.description,
          rarity: item.rarity?.backendValue || "Common",
          image: item.images?.featured || item.images?.icon || item.images?.smallIcon || "",
          price: entry.finalPrice,
          section: entry.section?.name || "Daily",
          colors: item?.series?.colors // Array of colors for gradient
        }));
        items = items.concat(itemData);
      }
    }

    // Group items by section
    const sections = {};
    items.forEach(item => {
      if (!sections[item.section]) sections[item.section] = [];
      sections[item.section].push(item);
    });

    // Canvas setup with new dimensions
    const itemsPerRow = this.rows;
    const itemWidth = 512;
    const itemHeight = 512;
    const padding = 20;
    const headerHeight = 100;
    const sectionPadding = 60;

    // Calculate total width based on sections
    const canvasWidth = itemsPerRow * (itemWidth + padding) + padding;

    // Calculate total height based on sections
    const rows = Math.ceil(items.filter(i => i.type === "item").length / itemsPerRow) + Math.ceil(items.filter(i => i.type === "bundle").length / itemsPerRow);

    const canvasHeight = rows * (itemHeight + padding) + (headerHeight + sectionPadding) + 300;

    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext("2d");

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#1e3c72');
    gradient.addColorStop(1, '#2a5298');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw header
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold 60px ${font}`;
    ctx.textAlign = 'center';
    ctx.fillText(this.textHeader.toUpperCase(), canvas.width / 2, 70);

    // Draw date
    const date = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    ctx.font = `30px ${font}`;
    ctx.fillText(date, canvas.width / 2, 110);

    // Draw sections
    let currentY = headerHeight + padding;

    for (const [sectionName, sectionItems] of Object.entries(sections)) {
      // Section header
      ctx.font = `bold 40px ${font}`;
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.fillText(sectionName.toUpperCase(), padding, currentY + 40);
      currentY += 60;

      // Draw items in grid
      let currentX = padding;
      let maxRowHeight = 0;

      for (let i = 0; i < sectionItems.length; i++) {
        const item = sectionItems[i];

        if (currentX + itemWidth > canvas.width - padding) {
          currentX = padding;
          currentY += maxRowHeight + padding;
          maxRowHeight = 0;
        }

        // Draw item card
        await this.drawItemCard(ctx, item, currentX, currentY, itemWidth, itemHeight, font);

        currentX += itemWidth + padding;
        maxRowHeight = Math.max(maxRowHeight, itemHeight);

        if (i === sectionItems.length - 1) {
          currentY += maxRowHeight + padding;
        }
      }

      currentY += sectionPadding;
    }

    // Draw footer
    ctx.fillStyle = '#ffffff';
    ctx.font = `30px ${font}`;
    ctx.textAlign = 'center';
    ctx.fillText(this.textFooter, canvas.width / 2, canvas.height - 30);

    return canvas.toBuffer("image/png");
  }

  // New method to draw colored rounded rectangles
  getItemColors(item) {
    if (item.type === "bundle") {
      // Validar los colores a hexadecimal
      const color1 = formatAndValidateHex(item.colors.color1);
      const color2 = formatAndValidateHex(item.colors.color2);
      return [color1, color2];
    } else if (item.type === "item") {
      if (item.colors) {
        // Si tiene colores, toma los dos primeros y los valida
        const color1 = formatAndValidateHex(item.colors[0]);
        const color2 = formatAndValidateHex(item.colors[1]);
        return [color1, color2];
      } else {
        // Si no tiene series.colors, obtiene los colores por rareza
        return this.getRarityColors(item.rarity);
      }
    }
    // Si no hay colores definidos, usa un gradiente por defecto
    return ["#ffffff", "#000000"];
  }

  // New method to draw individual item cards
  async drawItemCard(ctx, item, x, y, width, height, font) {

    const colors = this.getItemColors(item);

    // Draw card background with gradient
    const cardGradient = ctx.createLinearGradient(x, y, x, y + height);
    cardGradient.addColorStop(0, colors[0]);
    cardGradient.addColorStop(1, colors[1]);

    // Card shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 5;

    // Draw rounded rectangle
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, 15);
    ctx.fillStyle = cardGradient;
    ctx.fill();

    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;

    // Draw item image
    try {
      const image = await loadImage(item.image);
      const imageSize = Math.min(width - 40, height - 100);
      const imageX = x + (width - imageSize) / 2;
      const imageY = y + 20;

      ctx.drawImage(image, imageX, imageY, imageSize, imageSize);
    } catch (error) {
      console.error(`Error loading image for ${item.name}:`, error);
    }

    // Draw item name
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold 20px ${font}`;
    ctx.textAlign = 'center';
    ctx.fillText(item.name, x + width / 2, y + height - 60, width - 20);

    // Draw price with V-Bucks icon
    ctx.font = `bold 24px ${font}`;
    ctx.fillText(`${item.price} V-Bucks`, x + width / 2, y + height - 20);
  }

  // Updated rarity colors method
  getRarityColors(rarity) {
    const rarities = {
      "EFortRarity::Legendary": ['#ea8d23', 'rgba(233, 141, 75, 0.9)'],
      "EFortRarity::Epic": ['#c359ff', 'rgba(233, 94, 255, 0.9)'],
      "EFortRarity::Rare": ['#2cc1ff', 'rgba(55, 209, 255, 0.9)'],
      "EFortRarity::Uncommon": ['#69bb1e', 'rgba(135, 227, 57, 0.9)'],
      "EFortRarity::Common": ['#bebebe', 'rgba(177, 177, 177, 0.9)'],
    };
    return rarities[rarity] || rarities["EFortRarity::Uncommon"];
  }
}

module.exports = FortniteShop;