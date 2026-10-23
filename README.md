# Kermesse Group's — Site vitrine

Site statique en **HTML / CSS / JavaScript** avec **Tailwind CSS v4**.
Aucun framework, aucun bundler : Tailwind compile simplement `src/input.css` vers `dist/styles.css`.

## Prérequis

- [Node.js](https://nodejs.org/) 20 ou plus récent
- npm (fourni avec Node.js)

## Installation

```bash
npm install
```

## Développement

Lance Tailwind en mode watch (recompilation à chaque sauvegarde) :

```bash
npm run dev
```

Puis ouvre `index.html` dans le navigateur.
Astuce : avec VS Code, utilise l'extension **Live Server** pour le rechargement automatique.

> ⚠️ `dist/styles.css` doit être généré. Sans le watch, lance `npm run build` après tes modifications.

## Build de production

```bash
npm run build
```

Le fichier `dist/styles.css` est minifié et **versionné dans Git** pour que GitHub Pages fonctionne sans build.

## Structure

```
.
├── index.html          # La page (structure + classes Tailwind)
├── src/
│   └── input.css       # Source Tailwind : thème, composants, styles custom
├── dist/
│   └── styles.css      # CSS généré — ne pas éditer à la main
├── js/
│   └── main.js         # Menu mobile, animations au scroll, formulaire
├── assets/
│   └── favicon.svg
└── package.json
```

## Personnaliser le thème

Tout se passe dans `src/input.css`, dans le bloc `@theme` :

```css
@theme {
  --color-brand-500: #f2683c; /* couleur principale */
  --color-lagoon-500: #17998c; /* couleur secondaire */
  --font-display: "Fraunces", serif;
}
```

Ces variables génèrent automatiquement les classes `bg-brand-500`, `text-lagoon-500`, `font-display`, etc.

## Modifier les contenus

- **Textes / sections** : `index.html`
- **Téléphone, e-mail, réseaux sociaux** : chercher `+212`, `contact@` et `href="#"` dans `index.html`
- **Formulaire** : le site est statique, donc le formulaire ouvre le client mail du visiteur
  (`mailto:`). Pour recevoir les messages directement, branche un service comme
  [Formspree](https://formspree.io/) ou Netlify Forms.

## Déploiement GitHub Pages

1. Pousser le projet sur GitHub.
2. `Settings` → `Pages` → **Source** : `Deploy from a branch`.
3. Branche `main`, dossier `/ (root)` → **Save**.
4. Le site est publié sur `https://<utilisateur>.github.io/<depot>/`.

## Licence

Contenu et code © Kermesse Group's.
