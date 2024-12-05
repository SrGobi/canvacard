const { createCanvas, loadImage } = require("@napi-rs/canvas");
const fs = require("fs");
const APIError = require("./utils/error.utils");
const formatVariable = require("./utils/formatVariable.utils");
const parseSvg = require("./utils/parseSvg.utils");

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

    let items = [];
    for (const entry of entries) {
      if (entry.brItems) {
        const itemData = entry.brItems.map(item => ({
          name: item.name,
          description: item.description,
          rarity: item.rarity?.backendValue || "Unknown",
          image: item.images?.icon || item.images?.small || item.images?.large || "",
          price: entry.finalPrice,
        }));

        items = items.concat(itemData);
        console.log(items);
      }
    }

    // Configuración del canvas
    const itemsPerRow = 8;
    const itemWidth = 384;
    const itemHeight = 384;
    const padding = 15;
    const rows = Math.ceil(items.length / itemsPerRow);
    const canvasWidth = itemsPerRow * itemWidth + (itemsPerRow - 1) * padding;
    const canvasHeight = rows * itemHeight + (rows - 1) * padding + 300;

    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext("2d");

    // Create a blue circular radial gradient
    const gradient = ctx.createRadialGradient(
      canvasWidth / 2,   // X center of gradient
      canvasHeight / 2,  // Y center of gradient
      0,                 // Start radius (0 to start at a point)
      canvasWidth / 2,   // X center of gradient
      canvasHeight / 2,  // Y center of gradient
      canvasWidth    // Final radius set to canvas width
    );
    gradient.addColorStop(0, '#0064BD');  // Light Blue (SkyBlue)
    gradient.addColorStop(1, '#001E8E');  // Dark blue

    // Apply gradient as background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw header
    ctx.fillStyle = "#ffffff";
    ctx.font = `70px ${font}`;
    ctx.textAlign = "center";
    ctx.fillText(this.textHeader, canvas.width / 2, 100);

    // Initialize position variables
    let currentRow = 0;
    let currentColumn = 0;

    // Iterate over the items and draw them on the canvas
    for (const item of items) {

      // Calculate item position based on current column and row
      const x = currentColumn * (itemWidth + padding);
      const y = 200 + currentRow * (itemHeight + padding);

      // Get colors by rarity
      const rarityColors = this.getRarityColors(item.rarity || 'EFortRarity::Common');

      // Draw the item background
      ctx.fillStyle = rarityColors.colorCenter;
      ctx.fillRect(x, y, itemWidth, itemHeight); // Background for the article

      ctx.beginPath();

      // Imagen
      try {
        const image = await loadImage(item.image);
        ctx.drawImage(image, x, y, itemWidth, itemHeight);
      } catch {
        console.error("Error cargando imagen de item", item.name);
      }

      ctx.globalAlpha = 1;
      ctx.closePath();
      ctx.save();

      ctx.beginPath();
      const overlay = await loadImage(`${__dirname}/../assets/images/fortnite/shop/SmallOverlay.png`);
      ctx.drawImage(overlay, x, y, itemWidth, itemHeight);

      ctx.closePath();
      ctx.save();

      // Nombre
      ctx.fillStyle = "#FFFFFF";
      ctx.font = `30px ${font}`;
      ctx.fillText(item.name, x + itemWidth / 2, y + itemHeight - 50);

      // Precio
      ctx.fillStyle = "#FFFFFF";
      ctx.font = `30px ${font}`;
      ctx.fillText(`${item.price}`, x + itemWidth / 2, y + itemHeight - 20);

      currentColumn++;
      if (currentColumn >= itemsPerRow) {
        currentColumn = 0;
        currentRow++;
      }
    }

    // Pie de página
    ctx.fillStyle = "#ffffff";
    ctx.font = `50px ${font}`;
    ctx.fillText(this.textFooter, canvas.width / 2, canvas.height - 50);

    // Save Image
    const outputPath = `${__dirname}/../assets/images/fortnite/shop/output.png`;
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outputPath, buffer);

    return canvas.toBuffer("image/png");
  }
  // Function to get colors based on item rarity
  getRarityColors(rarity) {
    const rarities = {
      "EFortRarity::Legendary": { colorBorder: "#e98d4b", colorCenter: "#ea8d23" },
      "EFortRarity::Epic": { colorBorder: "#e95eff", colorCenter: "#c359ff" },
      "EFortRarity::Rare": { colorBorder: "#37d1ff", colorCenter: "#2cc1ff" },
      "EFortRarity::Uncommon": { colorBorder: "#87e339", colorCenter: "#69bb1e" },
      "EFortRarity::Common": { colorBorder: "#b1b1b1", colorCenter: "#bebebe" }
    };
    return rarities[rarity] || rarities.common;  // Use common by default
  }
}

module.exports = FortniteShop;