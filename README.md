# Greenovateur - Réseau de partage d'objets entre voisins

## 📱 À propos

Greenovateur est une web App développée avec SvelteKit qui permet aux résidents d'un même bâtiment de partager leurs objets peu utilisés. L'application facilite le prêt d'objets comme des imprimantes, des outils, ou du matériel de bricolage entre voisins.

## 🎯 Fonctionnalités principales

- Création de réseaux locaux par bâtiment
- Système de réservation avec plages horaires
- Gestion des objets disponibles au prêt
- Interface PWA accessible sur tous les appareils

## 🛠️ Technologies utilisées

- SvelteKit - Framework web moderne
- Base de données - Postgresql
- Hébergeur - Vercel

## 💡 Concept

1. **Création de réseau**
   - Les utilisateurs peuvent créer ou rejoindre le réseau de leur bâtiment
   - Vérification d'adresse pour la sécurité

2. **Gestion des objets**
   - Les prêteurs peuvent :
     - Ajouter leurs objets disponibles
     - Définir des plages horaires de disponibilité
     - Gérer leurs réservations

3. **Système de réservation**
   - Consultation des objets disponibles
   - Réservation sur les créneaux proposés
   - Confirmation automatique

## 🚀 Installation et déploiement

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run dev

# Construction pour la production
npm run build
```

## 📝 TODO

- [ ] Système de géolocalisation pour la vérification d'adresse
- [ ] Implémentation des notifications
- [ ] Tests unitaires et d'intégration
- [ ] Documentation utilisateur
- [ ] Documentation technique

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

Copyright (c) 2024 Greenovateur
