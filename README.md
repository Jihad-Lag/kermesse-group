# Kermesse Group's

Page blanche de départ en **HTML / CSS / JavaScript** avec **Tailwind CSS v4**.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Tailwind recompile `dist/styles.css` à chaque modification.

## Build production

```bash
npm run build
```

## Structure

```
├── index.html      # Page HTML
├── src/input.css   # Source Tailwind (thème + styles)
├── dist/styles.css # CSS généré (ne pas éditer à la main)
└── js/main.js      # JavaScript
```

## Logo de fond

Le logo en filigrane est dans `assets/logo.svg` et s'affiche derrière la page via `html::before` dans `src/input.css`.

Pour changer sa taille ou son opacité, modifier :

```css
background-size: min(70vw, 820px);
opacity: 0.1;
```

Pour le remplacer par le fichier officiel, écraser `assets/logo.svg` (ou changer l'URL dans le CSS).

## GitHub Pages

Le site est publié depuis la branche `main`, dossier racine.
Après une modification : `npm run build`, puis commit et push.
