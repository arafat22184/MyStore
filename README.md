A modern Next.js 15 (App Router) application featuring authentication with NextAuth.js, theme toggle (light/dark), and product management. This project demonstrates public and protected routes with a clean and responsive UI.

🚀 Features

✅ Landing Page with Hero, Navbar, Product Highlights, and Footer
✅ Authentication using NextAuth.js
✅ Public & Protected Pages
✅ Add New Products (Protected Page)
✅ Product Details Page
✅ Theme Toggle (Light/Dark) using next-themes
✅ Global Notifications with react-hot-toast

🛠️ Tech Stack

Next.js 15 (App Router)

NextAuth.js (Authentication)

Tailwind CSS (Styling)

React Icons (Icons)

next-themes (Dark/Light Mode)

React Hot Toast (Notifications)

📂 Route Summary
Route	Description	Auth Required
/	Landing Page (Hero, Products)	❌
/login	Login Page (NextAuth.js)	❌
/products	Product Listing Page	❌
/products/[id]	Product Details Page	❌
/dashboard	Protected Dashboard	✅
/dashboard/add-product	Add New Product Page	✅
🎨 Theme Toggle

Implemented with next-themes

Supports Light 🌞 & Dark 🌙 modes
