import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { performance } from "node:perf_hooks";

const start_time = performance.now();
const date = new Date();
const imgDir = path.resolve("./images");
const GH_RAW_URL_BASE = "https://raw.githubusercontent.com/SrGobi/canvacard/assets";
const GH_URL_BASE = "https://github.com/SrGobi/canvacard/blob/assets";

console.log("Building JSON data of assets");
const imageFiles = await fs.readdir(imgDir).then(res => {
    return Promise.all(res.map(async m => {
        const stat = await fs.stat(path.join(imgDir, m));
        return {
            name: m,
            size: stat.size,
            size_formatted: `${(stat.size / (1024 * 1024)).toFixed(2)} MB`,
            file_name: m.replace(path.extname(m), ""),
            ext: path.extname(m),
            url: `${GH_RAW_URL_BASE}/images/${m}`,
            file_url: `${GH_URL_BASE}/images/${m}`
        };
    }));
});

const datasrc = {
    id: crypto.randomUUID(),
    images: imageFiles,
    total_files: imageFiles.length,
    images_count: imageFiles.length,
    github: "https://github.com/SrGobi/canvacard",
    website: "https://canvacard.js.org",
    npm: "https://www.npmjs.com/package/canvacard",
    generated_timestamp: date.getTime(),
    generated_timestamp_iso: date.toISOString(),
    shasum: "https://raw.githubusercontent.com/SrGobi/canvacard/assets/shasum.txt"
};

const datasrc_stringified = JSON.stringify(datasrc);

const shasum = crypto.createHash("sha1").update(datasrc_stringified).digest("hex");

await fs.writeFile(path.resolve("./datasrc.json"), datasrc_stringified);
await fs.writeFile(path.resolve("./shasum.txt"), shasum);
console.log(`Finished JSON output of assets data in ${(performance.now() - start_time).toFixed(2)}ms!\n
${"-".repeat(30)}
Build id: ${datasrc.id}
Shasum: ${shasum}
Generated Timestamp: ${datasrc.generated_timestamp_iso}
Total Files: ${datasrc.total_files} (${datasrc.fonts_count} fonts, ${datasrc.images_count} images)
Shasum URL: ${datasrc.shasum}
Endpoint: https://raw.githubusercontent.com/SrGobi/canvacard/assets/datasrc.json
${"-".repeat(30)}`);