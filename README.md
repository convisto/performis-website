# Performis — landingspagina

Statische site. Geen build-stap nodig.

## Lokaal bekijken
Serveer de map met een statische webserver, bv.:

    npx serve .

## Publiceren
Upload de volledige map naar je host (Netlify, Vercel, GitHub Pages of eigen hosting).
`index.html` is de entrypoint.

## Structuur
- `index.html` — de volledige pagina (markup + logica)
- `support.js` — runtime die de pagina rendert
- `shader-hero.js` — WebGL-achtergrond in de hero
- `assets/` — logo, beeldmerk, favicon, Open Graph-afbeelding

## Formulier
Het contactformulier post naar Formspark (`https://submit-form.com/awjj4zUKu`).
Wijzig dat endpoint in `index.html` om leads elders te laten landen.
