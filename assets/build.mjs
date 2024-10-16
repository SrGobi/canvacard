import https from "https";
import fs from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import { dirname } from "path";

const METADATA_URL = "https://raw.githubusercontent.com/SrGobi/canvacard/assets/datasrc.json";
const ASSETS_DIR = "CANVACARD_ASSETS" in process.env ? process.env.CANVACARD_ASSETS : `${dirname(fileURLToPath(import.meta.url))}/../../main/assets`;

export async function build(force = false) {
	if (!fs.existsSync(ASSETS_DIR)) await fs.promises.mkdir(ASSETS_DIR, { recursive: true });
	if (!fs.existsSync(`${ASSETS_DIR}/images`)) await fs.promises.mkdir(`${ASSETS_DIR}/images`, { recursive: true });

	if (force) console.log(`${chalk.yellowBright("[Canvacard]")} ${chalk.whiteBright("Reconstruir con fuerza como as --force was supplied!")}`);

	if (fs.existsSync(`${ASSETS_DIR}/meta.json`) && !force) {
		console.log(`${chalk.greenBright("[Canvacard]")} ${chalk.whiteBright(`Se omite la instalación de activos porque los metadatos ya están disponibles!`)}`);
		process.exit();
	}

	console.log(`${chalk.yellowBright("[Canvacard]")} ${chalk.whiteBright("Descargando assets...")}`);

	// Descargar metadatos usando https
	const assetsMeta = await downloadJson(METADATA_URL).catch((e) => {
		console.log(`${chalk.redBright("[Canvacard]")} ${chalk.whiteBright(`Fallo al descargar activos:\n\t${chalk.redBright(e)}`)}`);
	});

	if (!assetsMeta) {
		console.log(`${chalk.redBright("[Canvacard]")} ${chalk.whiteBright(`Fallo en la instalación de activos!`)}`);
	} else {
		await fs.promises.writeFile(`${ASSETS_DIR}/meta.json`, JSON.stringify(assetsMeta));
		console.log(`${chalk.greenBright("[Canvacard]")} ${chalk.whiteBright(`Metadatos descargados correctamente!`)}`);

		console.log(`${chalk.yellowBright("[Canvacard]")} ${chalk.whiteBright("Descargando imágenes...")}`);
		await Promise.all(assetsMeta.images.map(m => downloadAsset(m.url, m.name)));
	}
}

// Función para descargar un JSON
function downloadJson(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (res) => {
			let data = '';
			res.on('data', chunk => data += chunk);
			res.on('end', () => {
				try {
					resolve(JSON.parse(data));
				} catch (e) {
					reject(new Error("Error al parsear el JSON."));
				}
			});
		}).on('error', reject);
	});
}

// Función para descargar un asset
function downloadAsset(url, name) {
	return new Promise((resolve, reject) => {
		const file = fs.createWriteStream(`${ASSETS_DIR}/images/${name}`);

		https.get(url, (res) => {
			if (res.statusCode !== 200) {
				return reject(new Error(`[HTTP ${res.statusCode}] No se ha podido descargar ${url}!`));
			}

			res.pipe(file);
			file.on('finish', () => {
				file.close(() => {
					console.log(`${chalk.greenBright("[Canvacard]")} ${chalk.whiteBright(`Descargado correctamente ${chalk.cyanBright(name)}`)}`);
					resolve();
				});
			});
		}).on('error', (err) => {
			fs.unlink(`${ASSETS_DIR}/images/${name}`, () => reject(err));
		});
	});
}