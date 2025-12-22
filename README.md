# 🛒 Shop Mate

![Capture d'écran de l'application](image.png)

Shop Mate est une application e-commerce moderne construite avec **React**, mettant en œuvre une **architecture propre**, une **gestion globale de l’état via Context API**, et une **expérience utilisateur fluide**.

---

## Fonctionnalités principales

- 🛍️ Gestion globale du panier (Context API)
- ➕ Ajout de produits avec gestion des quantités
- ❌ Suppression de produits du panier
- 🧹 Réinitialisation complète du panier
- 🧮 Calcul automatique du nombre d’articles
- 💰 Calcul dynamique du total
- 🧾 Dropdown panier interactif dans le header
- 🎨 UI responsive avec Tailwind CSS

---

## 🧱 Architecture

```text
src/
├── components/
│   ├── Header.jsx
│   └── ProductCard.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   └── Home.jsx
├── App.jsx
└── main.jsx

---
## 🔑Principes respectés

-Séparation des responsabilités
-État global minimal
-Logique métier centralisée
-Immutabilité de l’état
-Hooks personnalisés
-Code scalable et maintenable

---
## Gestion du panier (Context API)

-Le panier est géré via un CartContext qui expose :
-cart → état global
-addToCart(product)
-removeFromCart(id)
-clearCart()

