# Next.js Product Management App

# **🌐 Live Site:** [My Store](https://assignment-10-one-xi.vercel.app/)

## Project Overview

This is a simple **Next.js 15** application demonstrating public and protected pages with basic authentication using **NextAuth.js**. Users can explore products on the landing page and product list, view product details, and, after logging in, manage products via a protected dashboard page.

---

## Screenshots

### Landing Page

![Landing Page](https://i.ibb.co.com/5WMZhqxH/homepage.png)

### Products Page

![Products Page](https://i.ibb.co.com/bwdBfjT/products-Page.png)

---

## Features

### Public Pages

- **Landing Page (`/`)**

  - Includes Navbar, Hero section, Product Highlights, and Footer
  - Navigation to Login and Products pages
  - No authentication required

- **Product List (`/products`)**

  - Displays all products fetched from backend or mock data
  - Each product shows: name, description, price, and a details button
  - Publicly accessible

- **Product Details (`/products/[id]`)**
  - Shows full product details
  - Publicly accessible

### Authentication

- **Login (`/login`)**
  - Email/password (credentials) login
  - Google social login
  - Redirects to `/products` on successful login
  - Protected routes only accessible after login

### Protected Pages

- **Add Product (`/dashboard/add-product`)**
  - Accessible only when logged in
  - Form to add a new product
  - Redirects unauthenticated users to login

---

## Technologies Used

- **Frontend:** Next.js 15 (App Router), React, Tailwind CSS
- **Authentication:** NextAuth.js (Credentials & Google)
- **Backend:** Next.js API Routes (`/api`)
- **Database:** MongoDB (for storing products)

---

## Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arafat22184/MyStore.git
   cd MyStore
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env.local` file and add your environment variables:

   ```env
   NEXT_PUBLIC_MONGODB_URI=<your-mongodb-uri>
   NEXTAUTH_SECRET=<your-nextauth-secret>
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   NEXTAUTH_URL=<your-next-auth-url>
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## Route Summary

| Route                    | Access    | Description                                    |
| ------------------------ | --------- | ---------------------------------------------- |
| `/`                      | Public    | Landing page with hero, highlights, and footer |
| `/login`                 | Public    | Login page with credentials & Google login     |
| `/products`              | Public    | List of all products                           |
| `/products/[id]`         | Public    | Detailed view of a single product              |
| `/dashboard/add-product` | Protected | Form to add a new product (requires login)     |

---

## Deployment

- You can deploy this app to **Vercel** for live access.
- Make sure to set environment variables in Vercel dashboard.

---

## Author

- Your Name
- GitHub: [https://github.com/arafat22184](https://github.com/arafat22184)
- Live Site: [https://assignment-10-one-xi.vercel.app/](https://assignment-10-one-xi.vercel.app/)
