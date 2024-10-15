const fs = require("fs");
const path = require("path");

const ASSETS_DIR = path.join(__dirname, "..", "assets");

let loaded = false;

const store = {
  images: {}
};

function loadAssets(warnIfFailed = true) {
  for (const asset of ["images"]) {
    try {
      const data = fs.readdirSync(`${ASSETS_DIR}/${asset}`);
      data.forEach(d => {
        const name = d.split(".").shift();
        (asset === store.images)[name] = {
          name,
          path: path.join(ASSETS_DIR, asset, d),
          type: asset === "IMAGE"
        };
      });
    } catch {
      if (warnIfFailed) process.emitWarning("[Canvacard] No se han podido cargar los activos. Pruebe a ejecutar \"npx canvacard rebuild --force\"");
    }
  }
}

const ensureLoaded = () => {
  if (!loaded) {
    loadAssets();
    loaded = true;
  }
};

module.exports = class CanvacardAssets {
  constructor() {
    return CanvacardAssets;
  }
  static load = loadAssets;
  static ASSETS_DIR = ASSETS_DIR;
  static image = {
    get(name) {
      if (!name || typeof name !== "string") throw new TypeError("el nombre de la imagen debe ser una string");
      ensureLoaded();
      return store.images[name]?.path;
    },
    getMetadata(name) {
      if (!name || typeof name !== "string") throw new TypeError("el nombre de la imagen debe ser una string");
      ensureLoaded();
      return store.images[name];
    },
    all() {
      ensureLoaded();
      return store.images;
    }
  }
};