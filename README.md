# 🌐 Kasa

Création d'un site de location immobilière avec architecture React

## ✅ Objectif

- Création d’un système de routage avec React Router
- Implémentation des différentes pages du site
- Utilisation d’un Context et d’un Provider pour effectuer une requête fetch et récupérer les données stockées dans le dossier public

## 🚀 Stack technique

- [react] – bibliothèque UI
- [react-router] – Gestion du routage entre les différentes pages
- [prop-types] – vérification des types des props dans les composants React
- [@fortawesome] – affichage d’icônes
- [sass] – préprocesseur CSS
- [styled-components] – pour styliser les composants React
- [vite] – bundler ultra rapide pour le développement front-end
- [@eslint/js] – Analyse du code pour respecter les bonnes pratiques
- [prettier] – Formateur de code automatique pour assurer une mise en forme cohérente

## 📁 Structure du projet

```bash

public/
├─ data
│  └── accommodation-data.json
└── ...

src/
│
├── main.tsx
├── styles/
│   ├── color.scss
│   └── style.scss
│
├── assets/
│   ├── icons/
│   ├── logo/
│   └── images/
│
├── components
│   ├── banner/
│   │   ├── banner.jsx
│   │   └── banner.scss
│   │
│   ├── card-container/
│   │    ├── card-container.jsx
│   │    └── card-container.scss
│   │
│   ├── carousel/
│   │   ├── carousel.jsx
│   │   └── carousel.scss
│   │
│   ├── description/
│   │   ├── description.jsx
│   │   └── description.scss
│   │
│   ├── dropdown-button/
│   │   ├── dropdown-button.jsx
│   │   └── dropdown-button.scss
│   │
│   ├── footer/
│   │   ├── footer.jsx
│   │   └── footer.scss
│   │
│   └── header/
│       ├── header.jsx
│       └── header.scss
│
├── pages
│   ├── about/
│   │   ├── about.jsx
│   │   └── about.scss
│   │
│   ├── accommodation/
│   │   ├── accommodation.jsx
│   │   └── accommodation.scss
│   │
│   ├── error/
│   │   ├── error.jsx
│   │   └── error.scss
│   │
│   └── home/
│       ├── home.jsx
│       └── home.scss
│
├── useful/
│   └── contexte/
│       ├── Get-data-context.jsx
│       └── Get-data-provider.jsx
└── ...
```

## 🔧 Scripts utiles

- Lancer le serveur de développement

```bash
npm run dev
```

- Générer la version de production

```bash
npm run build
```

- Vérifier la qualité du code avec ESLint

```bash
npm run lint
```

- Prévisualiser du site en mode production.

```bash
npm run preview
```
