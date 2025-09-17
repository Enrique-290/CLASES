# Inglés Dinamita (Vite + React + Tailwind)

## Desarrollo local
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
```

## Deploy en Vercel
- Framework: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Si aparece error de *paquete no resolvible*, edite `vite.config.js` y agregue el nombre en `build.rollupOptions.external`.
