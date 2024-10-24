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
    this.token = "f4a26b940ef54a9a4238cef040bd08fa9001cd6c";
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

    const shopRequest = await fetch("https://fortnite-api.com/v2/shop/br/combined?language=es", {
      headers: { "x-api-key": this.token }
    });

    if (!shopRequest.ok) throw new APIError("Error al obtener datos de la tienda: " + shopRequest.statusText);

    const shopData = await shopRequest.json();
    const entries = shopData.data.featured.entries;

    // Create a new arrangement for the items
    let items = [];
    const existingItemsSet = new Set(); // Use Set to avoid duplicates

    for (const entry of entries) {
      if (entry.bundle) {
        // If it's a bundle, get the first item in the bundle for the rarity
        const bundle = entry.bundle;
        const firstItem = entry.items[0]; // Get the first item

        // Add the batch to the array, using the rarity of the first item
        items.push({
          name: bundle.name,
          type: bundle.info,
          images: bundle.image,
          regularPrice: entry.regularPrice,
          finalPrice: entry.finalPrice,
          rarity: firstItem?.rarity || { backendValue: 'EFortRarity::Common' } // Add first item rarity or default value
        });
      } else {
        // If it is a loose item, add only the item
        entry.items.forEach(item => {
          if (!existingItemsSet.has(item.name)) {
            existingItemsSet.add(item.name);
            items.push({
              name: item.name,
              type: "Article",
              rarity: item.rarity,
              images: item.images?.icon || item.images?.smallIcon || item.images?.featured,
              finalPrice: entry.finalPrice // Add price to item object
            });
          }
        });
      }
    }

    // Sort items by finalPrice (lowest to highest)
    items.sort((a, b) => b.finalPrice - a.finalPrice);

    const itemsPerRow = 8; // Maximum 8 items per row
    const maxRows = 10;    // Maximum 10 rows
    const itemWidth = 384; // Width of each item
    const itemHeight = 384; // Height of each item
    const padding = 15;    // Space between items
    const canvasWidth = itemsPerRow * itemWidth + (itemsPerRow - 1) * padding;
    const canvasHeight = maxRows * itemHeight + (maxRows - 1) * padding + 300;  // Extra adjustment for header

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
      try {
        const { name, type, rarity, images, finalPrice } = item;

        // Calculate item position based on current column and row
        const x = currentColumn * (itemWidth + padding);
        const y = 200 + currentRow * (itemHeight + padding);

        // Get colors by rarity
        const rarityColors = this.getRarityColors(rarity.backendValue || 'EFortRarity::Common');

        // Draw the item background
        ctx.fillStyle = rarityColors.colorCenter;

        ctx.fillRect(x, y, itemWidth, itemHeight);  // Background for the article

        ctx.beginPath();

        // Upload and draw the image of the item or lot
        const itemIcon = await loadImage(images);

        // If it is a loose item
        ctx.drawImage(itemIcon, x, y, itemWidth, itemHeight);

        ctx.globalAlpha = 1;
        ctx.closePath();
        ctx.save();

        ctx.beginPath();
        const overlay = await loadImage(`${__dirname}/../assets/images/fortnite/shop/SmallOverlay.png`);
        ctx.drawImage(overlay, x, y, itemWidth, itemHeight);

        ctx.closePath();
        ctx.save();

        ctx.globalAlpha = 1;

        // Adjust the item name (lot or article)
        this.drawItemName(ctx, name, x + 196, y + 310, 375, font);

        // Adjust the price within the card area
        await this.drawItemPrice(ctx, finalPrice, x + 192, y + 340, 200, font);

        currentColumn++;

        // If we reach the maximum number of columns, move to the next row
        if (currentColumn >= itemsPerRow) {
          currentColumn = 0;
          currentRow++;

          // If we reach the maximum number of rows, we are done.
          if (currentRow >= maxRows) break;
        }
      } catch (error) {
        console.error("Error al procesar el ítem:", item, error);
        // Skip the item that has an error and continue with the next one
        continue;
      }
    }

    // Footer
    ctx.font = `50px ${font}`;
    ctx.fillText(this.textFooter, canvas.width / 2, canvas.height - 50);

    // Save Image
    const outputPath = `${__dirname}/../assets/images/fortnite/shop/output.png`;
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outputPath, buffer);

    return canvas.toBuffer("image/png");
  }

  // Function to obtain a numerical value according to the rarity of the item
  getRarityValue(rarity) {
    const rarityValues = {
      "EFortRarity::Legendary": 5,
      "EFortRarity::Epic": 4,
      "EFortRarity::Rare": 3,
      "EFortRarity::Uncommon": 2,
      "EFortRarity::Common": 1
    };
    return rarityValues[rarity] || 0; // Use 0 by default if not found
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

  // Function to split the name into two lines if necessary
  drawItemName(ctx, text, x, y, maxWidth, font) {
    ctx.font = `30px ${font}`;
    ctx.fillStyle = "#ffffff";

    const words = text.split(' ');
    let line = '';
    let lineHeight = 30;
    let lineCount = 0;
    const maxLines = 2; // Maximum 2 lines

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
    // Draw the last line
    ctx.fillText(line, x, y);
  }

  // Function to adjust the price within the card
  async drawItemPrice(ctx, price, x, y, maxWidth, font) {
    const vbuckIcon = await loadImage(parseSvg(`${__dirname}/../assets/images/fortnite/shop/vBucks.svg`));
    const iconSize = 20;

    // Draw the V-Bucks icon
    ctx.drawImage(vbuckIcon, x - 40, y + 10, iconSize, iconSize);

    // Draw the price adjusted to the available width
    ctx.font = `30px ${font}`;
    ctx.fillStyle = "#ffffff";
    let priceText = `${price}`;
    const priceWidth = ctx.measureText(priceText).width;

    // If the price exceeds the available space, adjust the font size
    if (priceWidth > maxWidth - iconSize - 10) {
      let fontSize = 30;
      do {
        fontSize -= 1;
        ctx.font = `${fontSize}px ${font}`;
      } while (ctx.measureText(priceText).width > maxWidth - iconSize - 10);
    }

    // Draw the price text
    ctx.fillText(priceText, x + iconSize, y + 30);
  }
}

module.exports = FortniteShop;