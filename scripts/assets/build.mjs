import fetch from "node-fetch";
import fs from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import { dirname } from "path";

const METADATA_URL = "https://raw.githubusercontent.com/SrGobi/canvacard/assets/datasrc.json";
const ASSETS_DIR = "CANVACARD_ASSETS" in process.env ? process.env.CANVACARD_ASSETS : `${dirname(fileURLToPath(import.meta.url))}/../../assets`;

export async function build(force = false) {
	if (!fs.existsSync(ASSETS_DIR)) await fs.promises.mkdir(ASSETS_DIR, { recursive: true });
	if (!fs.existsSync(`${ASSETS_DIR}/images`)) await fs.promises.mkdir(`${ASSETS_DIR}/images`, { recursive: true });

	if (force) console.log(`${chalk.yellowBright("[Canvacard]")} ${chalk.whiteBright("Reconstruir con fuerza como as --force was supplied!")}`);

	if (fs.existsSync(`${ASSETS_DIR}/meta.json`) && !force) {
		console.log(`${chalk.greenBright("[Canvacard]")} ${chalk.whiteBright(`Se omite la instalación de activos porque los metadatos ya están disponibles!`)}`);
		process.exit();
	}

	console.log(`${chalk.yellowBright("[Canvacard]")} ${chalk.whiteBright("Descargando assets...")}`);

	const assetsMeta = await fetch(METADATA_URL, {
		redirect: "follow"
	})
		.then(res => res.json())
		.then(data => {
			if (!data) throw new Error(`Fuente de activos corruptos`);
			return data;
		})
		.catch((e) => {
			console.log(`${chalk.redBright("[Canvacard]")} ${chalk.whiteBright(`Fallo al descargar activos:\n\t${chalk.redBright(e)}`)}`);
		});

	if (!assetsMeta) {
		console.log(`${chalk.redBright("[Canvacard]")} ${chalk.whiteBright(`Fallo en la instalación de activos!`)}`);
	} else {
		await fs.promises.writeFile(`${ASSETS_DIR}/meta.json`, JSON.stringify(assetsMeta));
		console.log(`${chalk.greenBright("[Canvacard]")} ${chalk.whiteBright(`Metadatos descargados correctamente!`)}`);

		console.log(`${chalk.yellowBright("[Canvacard]")} ${chalk.whiteBright("Descargando imágenes...")}`);
		await Promise.all(assetsMeta.images.map(m => downloadAsset(m.url, m.name)));

		async function downloadAsset(url, name) {
			const stream = await fetch(url).then(res => {
				if (!res.ok || !res.body) throw new Error(`[HTTP ${res.status}] No se ha podido descargar ${url}!`);
				return res.body;
			});

			const writer = stream.pipe(fs.createWriteStream(`${ASSETS_DIR}/images/${name}`));

			writer.on("finish", () => {
				console.log(`${chalk.greenBright("[Canvacard]")} ${chalk.whiteBright(`Descargado correctamente ${chalk.cyanBright(name)}`)}`);
			});
		}
	}
}