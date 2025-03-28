# Guide de Contribution

## Structure des Branches

### Branches Principales

- `main` : Branche de production, contient le code stable et déployé
- `develop` : Branche de développement, contient le code en cours d'intégration

### Branches de Support

- `feature/*` : Nouvelles fonctionnalités
- `hotfix/*` : Corrections urgentes en production
- `release/*` : Préparation des releases

## Workflow de Développement

### 1. Développement d'une Nouvelle Fonctionnalité

```bash
# Créer une nouvelle branche feature depuis develop
git checkout develop
git pull origin develop
git checkout -b feature/nom-de-la-feature

# Développer et commiter
git add .
git commit -m "feat: description de la feature"

# Pousser la branche
git push origin feature/nom-de-la-feature
```

### 2. Correction d'un Bug Critique (Hotfix)

```bash
# Créer une branche hotfix depuis main
git checkout main
git pull origin main
git checkout -b hotfix/description-du-bug

# Corriger et commiter
git add .
git commit -m "fix: description de la correction"

# Merger dans main et develop
git checkout main
git merge hotfix/description-du-bug
git push origin main

git checkout develop
git merge hotfix/description-du-bug
git push origin develop

# Supprimer la branche hotfix
git branch -d hotfix/description-du-bug
git push origin --delete hotfix/description-du-bug
```

### 3. Préparation d'une Release

```bash
# Créer une branche release depuis develop
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# Préparer la release
git add .
git commit -m "chore: prepare release v1.0.0"

# Merger dans main et develop
git checkout main
git merge release/v1.0.0
git push origin main

git checkout develop
git merge release/v1.0.0
git push origin develop

# Supprimer la branche release
git branch -d release/v1.0.0
git push origin --delete release/v1.0.0
```

## Conventions de Commit

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat` : Nouvelle fonctionnalité
- `fix` : Correction de bug
- `docs` : Documentation
- `style` : Formatage, point-virgules, etc.
- `refactor` : Refactorisation du code
- `test` : Ajout ou modification de tests
- `chore` : Mise à jour des dépendances, etc.

### Exemples

```bash
feat(auth): add OAuth2 authentication
fix(api): resolve rate limiting issue
docs(readme): update installation instructions
style(components): format button styles
refactor(utils): improve error handling
test(auth): add unit tests for login
chore(deps): update dependencies
```

## Pull Requests

### Processus

1. Créer une PR depuis votre branche vers `develop`
2. Attendre la revue de code (minimum 1 reviewer)
3. Résoudre les commentaires si nécessaire
4. Merger une fois approuvé

### Règles

- PRs doivent passer tous les tests
- PRs doivent être à jour avec la branche cible
- PRs doivent suivre les conventions de commit
- PRs doivent inclure une description claire

## Protection des Branches

### main

- Require pull request reviews (2 reviewers minimum)
- Require status checks to pass
- Require up-to-date branches
- Require linear history
- No direct pushes

### develop

- Require pull request reviews (1 reviewer minimum)
- Require status checks to pass
- Require up-to-date branches

### feature/\*

- Require status checks to pass
- Require up-to-date branches
