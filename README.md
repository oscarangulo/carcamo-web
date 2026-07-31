# carcamo-web

Sitio portafolio del escultor **José Miguel Cárcamo** — https://www.jmcarcamo.cl/

Next.js 16 con App Router, React 19 y Tailwind v4. **No hay CMS ni base de datos**: todo el
contenido (obras, textos, prensa, trayectoria) está hardcodeado en los `.tsx` de `src/app/`.
Para cambiar un texto o agregar una obra se edita el componente y se vuelve a desplegar.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción (genera .next/standalone)
npm run lint
```

## Deploy

**No hay CI.** El build de la imagen se hace a mano desde el equipo del desarrollador, se
publica en GHCR y Coolify hace el pull.

```bash
docker buildx build --platform linux/amd64 -t ghcr.io/oscarangulo/carcamo-web:latest --push .
```

### `--platform linux/amd64` no es opcional

El VPS es **amd64** y el build normalmente se hace en un **Mac ARM**. Si omites el flag, buildx
usa la arquitectura local, la imagen sale **arm64** y el contenedor no arranca en el servidor:

```
exec format error
```

Si aparece ese error en los logs de Coolify, es esto: reconstruye con el flag y vuelve a pushear.

## Infraestructura

- **Coolify** en un VPS de Hostinger.
- **Traefik** como proxy, con **TLS de Let's Encrypt** automático.
- El servicio corre detrás de la red externa `coolify` y expone el puerto **3000**
  (ver `docker-compose.yml`).
- El **enrutamiento del dominio y el TLS se configuran en la UI de Coolify**, no en este repo.
- `/healthz` responde `ok` en texto plano; es el endpoint que usa el healthcheck del contenedor.
- El redirect de `jmcarcamo.cl` a `www.jmcarcamo.cl` (301) vive en `next.config.ts`.

## Nota sobre `contenido/`

`contenido/` es material fuente pesado (fotos originales, PDFs, textos de la web antigua): más de
1 GB que **está en el historial de git**. Está en `.dockerignore`, así que **no se copia a la
imagen**. Las imágenes que el sitio realmente sirve son las optimizadas de `public/images/`.
