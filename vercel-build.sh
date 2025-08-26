#!/bin/bash

# Script de build personnalisé pour Vercel
echo "🚀 Démarrage du build Arion OS Landing Page..."

# Vérifier les dépendances
echo "📦 Vérification des dépendances..."
npm ci --only=production

# Lancer le build
echo "🔨 Build du projet..."
npm run build

# Vérifier que le build s'est bien passé
if [ $? -eq 0 ]; then
    echo "✅ Build réussi !"
    echo "📁 Contenu du dossier .next :"
    ls -la .next/
else
    echo "❌ Erreur lors du build"
    exit 1
fi

echo "🎉 Build terminé avec succès !"
