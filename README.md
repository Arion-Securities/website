# 🚀 Arion OS - Landing Page & Blog

Landing page moderne et blog pour Arion OS, plateforme de gestion d'entreprise intelligente.

## ✨ Fonctionnalités

- **Landing Page Responsive** : Design moderne avec Tailwind CSS et shadcn/ui
- **Blog MDX** : Système de blog avec support Markdown + JSX
- **Design System Cohérent** : Utilise le même design system que l'application principale
- **SEO Optimisé** : Métadonnées, Open Graph, et génération statique
- **Performance** : Next.js App Router avec optimisations

## 🛠️ Technologies

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS + shadcn/ui
- **Content** : MDX avec gray-matter
- **Icons** : Lucide React
- **Deployment** : Vercel (recommandé)

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le projet
git clone <repository-url>
cd landing-page

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
landing-page/
├── src/
│   ├── app/                    # Pages Next.js
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── blog/              # Routes du blog
│   │   │   ├── page.tsx       # Liste des articles
│   │   │   └── [slug]/        # Article individuel
│   │   └── globals.css        # Styles globaux
│   ├── components/             # Composants React
│   │   ├── landing/           # Composants de la landing page
│   │   ├── blog/              # Composants du blog
│   │   └── ui/                # Composants shadcn/ui
│   ├── content/                # Contenu MDX
│   │   └── blog/              # Articles de blog
│   └── lib/                   # Utilitaires
│       ├── mdx.ts             # Gestion du contenu MDX
│       └── utils.ts           # Utilitaires généraux
├── public/                     # Assets statiques
├── tailwind.config.ts          # Configuration Tailwind
└── package.json
```

## ✍️ Créer un Nouvel Article

### 1. Utiliser le Template

```bash
# Copier le template
cp src/content/blog/post-template.mdx src/content/blog/mon-nouvel-article.mdx
```

### 2. Éditer le Front Matter

```yaml
---
title: "Titre de l'article"
slug: "mon-nouvel-article"
excerpt: "Résumé court de l'article"
author: "Votre Nom"
published_at: "2024-01-20"
updated_at: "2024-01-20"
tags: ["tag1", "tag2"]
featured: false
image: "/images/blog/mon-nouvel-article/hero.jpg"
---
```

### 3. Écrire le Contenu

Utilisez la syntaxe Markdown standard avec support pour les composants React si nécessaire.

### 4. Ajouter des Images

Placez les images dans `public/images/blog/[slug]/` et référencez-les dans le front matter.

## 🎨 Personnalisation

### Design System

Le projet utilise le design system Arion OS avec des variables CSS personnalisées :

```css
:root {
  --primary: 200 100% 22%;        /* Bleu Arion */
  --background: 240 10% 98%;      /* Gris clair pastel */
  --foreground: 0 0% 20%;         /* Texte gris foncé */
}
```

### Composants

- **Header** : Navigation principale avec menu mobile
- **Hero** : Section d'accueil avec CTA
- **Features** : Présentation des fonctionnalités
- **Footer** : Pied de page avec liens
- **Blog Components** : Cartes d'articles, filtres, etc.

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déploiement automatique à chaque push

### Autres Plateformes

Le projet peut être déployé sur n'importe quelle plateforme supportant Next.js :
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📱 Responsive Design

- **Mobile First** : Design optimisé pour mobile
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation** : Menu hamburger sur mobile, navigation horizontale sur desktop

## 🔍 SEO

- **Métadonnées** : Titres, descriptions, Open Graph
- **Génération Statique** : Pages pré-générées pour de meilleures performances
- **Structure Sémantique** : HTML5 sémantique avec landmarks
- **Images** : Optimisation et alt text

## 🧪 Développement

### Scripts Disponibles

```bash
npm run dev          # Développement local
npm run build        # Build de production
npm run start        # Démarrer en production
npm run lint         # Vérification ESLint
```

### Variables d'Environnement

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🤝 Contribution

### Process de Publication

1. **Créer une branche** : `git checkout -b blog/nouvel-article`
2. **Écrire l'article** : Utiliser le template MDX
3. **Tester localement** : `npm run dev`
4. **Créer une PR** : Avec description détaillée
5. **Relecture** : Utiliser la preview Vercel
6. **Merge** : Publication automatique

### Checklist PR

- [ ] Article écrit et relu
- [ ] Images optimisées et placées
- [ ] Front matter complet
- [ ] Tests locaux OK
- [ ] Preview Vercel vérifiée

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [MDX](https://mdxjs.com/)

## 📞 Support

Pour toute question ou problème :
- Créer une issue GitHub
- Contacter l'équipe Arion OS

---

**Arion OS** - Transformez votre entreprise avec l'intelligence artificielle 🚀
