# Goiar CRM — Portal Comercial

Portal de presentaciones de preventa para el equipo comercial de Goiar.

## Deploy en Vercel

1. Subí este repositorio a GitHub
2. Entrá a [vercel.com](https://vercel.com) → New Project → importá el repo
3. En **Environment Variables** agregá:
   - `ANTHROPIC_API_KEY` = tu API key de Anthropic (la encontrás en console.anthropic.com)
4. Click en Deploy — listo 🚀

## Desarrollo local

```bash
npm install
cp .env.example .env.local
# Editá .env.local con tu API key
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000)

## Estructura

```
pages/
  index.js          → Portal completo (HTML/CSS/JS embebido)
  api/
    generate.js     → Proxy hacia Anthropic API (resuelve CORS)
```
