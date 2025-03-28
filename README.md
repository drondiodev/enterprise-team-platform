# Enterprise Team Platform

Plateforme de collaboration pour équipes de développeurs en entreprise.

## 🚀 Technologies

- Next.js 14
- TypeScript
- Tailwind CSS
- Drizzle ORM
- Neon Database
- Clerk Authentication

## 📋 Prérequis

- Node.js 18+
- pnpm
- Git

## 🛠 Installation

```bash
# Cloner le projet
git clone https://github.com/votre-org/enterprise-team-platform.git

# Installer les dépendances
pnpm install

# Copier les variables d'environnement
cp .env.example .env.local

# Démarrer le serveur de développement
pnpm dev
```

## 🔧 Configuration

1. Créer un compte sur [Neon](https://neon.tech)
2. Créer un compte sur [Clerk](https://clerk.dev)
3. Configurer les variables d'environnement dans `.env.local`

## 📚 Documentation

- [Guide de Contribution](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)
- [TODO](TODO.md)

## 🔄 Workflow de Développement

Ce projet suit le workflow GitFlow pour la gestion des branches :

- `main` : Production
- `develop` : Développement
- `feature/*` : Nouvelles fonctionnalités
- `hotfix/*` : Corrections urgentes
- `release/*` : Préparation des releases

Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour plus de détails.

## 🧪 Tests

```bash
# Lancer les tests
pnpm test

# Lancer les tests en mode watch
pnpm test:watch

# Lancer les tests E2E
pnpm test:e2e
```

## 📦 Build

```bash
# Build de production
pnpm build

# Démarrer en production
pnpm start
```

## 📝 Licence

MIT
