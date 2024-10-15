import { build } from "./assets/build.mjs"

// Asegúrese de crear activos si se ejecuta a través del script posterior a la instalación
await build(true);