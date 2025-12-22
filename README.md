# 🛒 Shop Mate

![Capture d'écran de l'application](image.png)

Shop Mate est une application e-commerce moderne construite avec **React**, mettant en œuvre une **architecture propre**, une **gestion globale de l’état via Context API**, et une **expérience utilisateur fluide**.

---

## Fonctionnalités principales

-  Gestion globale du panier (Context API)
-  Ajout de produits avec gestion des quantités
-  Suppression de produits du panier
-  Réinitialisation complète du panier
-  Calcul automatique du nombre d’articles
-  Calcul dynamique du total
-  Dropdown panier interactif dans le header
-  UI responsive avec Tailwind CSS

---

## 🧱 Architecture

```bash
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
```

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

Accessible dans n’importe quel composant via :
```bash
const { cart, addToCart } = useCart();
```

---
## 🛠️ Stack technique

-React
-Context API
-Tailwind CSS
-React Icons
-JavaScript (ES6+)

---

## 📦 Installation
```bash
git clone https://github.com/username/shop-mate.git
cd shop-mate
npm install
npm run dev
```


---
##  Bonnes pratiques Git

-Conventional Commits
-Pull Requests obligatoires
-Code review
-Changelog maintenu
-Branches par fonctionnalité
