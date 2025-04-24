<p align="center">
  <img src="https://cravory.vercel.app/assets/logo-CodzV-5_.svg" alt="Cravory" style="max-width: 300px;">
  <br />
    <br />
    <h1 align="center">Cravory</h1>
    <p align="center">Fast and Intuitive Recipes Finder</p>
    <br />
</p>

<p align="center">
  <img src="https://cravory.vercel.app/images/cravory-preview.png" alt="Cravory Preview" style="max-width: 100%;">
</p>

## What is Cravory  

Cravory is a recipe finder built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/).  

It offers a lightning-fast developer experience and clean, responsive UI styles thanks to modern frontend tooling.

## Features

- Built with React 19 and Vite
- Styled with Tailwind CSS 4.1
- Sass support for theme customizations
- PostCSS and Autoprefixer included

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 4.1
- Sass
- PostCSS
- Autoprefixer
- TypeScript

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Endlosforscher/cravory.git
cd cravory
```

### 2.Install dependencies
Make sure you have Node.js installed (recommendation: Node 20+).
Then run:

```bash
npm install
```

### 3. Start the Mock API Server
Before starting the frontend, launch the mock API server using:

```
npm run server
```

By default, this will start json-server at http://localhost:5000.
You can change the port in the package.json under the server script.

👉 A proxy has been configured in vite.config.ts so you can access the API through /api on the same port as the frontend (e.g. http://localhost:3000/api/recipes).

### 4. Start the Development Server
```bash
npm run dev
```

ℹ️ Note: The default port is 3000, but you can change it in the vite.config.js file if needed.

### 5. Or build for production
```bash
npm run build
```

### Live Demo

This project is also available live on Vercel:  
👉 [https://cravory.vercel.app/](https://cravory.vercel.app/)

## Assumptions & Design Decisions

- **Name**: *Cravory* is a blend of “Craving” and “Savoury.”
- **Framework & build**: Built as a fast, lightweight SPA using React with Vite.
- **Styling & theming**:  
  - Pastel color palette (based on rose/amber shades).  
  - Fonts: Inter (sans-serif) for body text, Merienda (serif/playful) for headings.  
  - Tailwind CSS (latest) with custom `@apply` utility classes for checkboxes, inputs, buttons, etc.
- **Data & API**: Mock REST API powered by `json-server`, with dedicated endpoints for recipes.
- **Hosting & CI**: Frontend and API deployed on Vercel, leveraging its built-in continuous integration.
- **Icons**: Font Awesome icons via the `react-icons` library.
- **Routing**: Client-side routing handled by `react-router-dom`.
- **Architecture**:  
  - Project split into reusable components.  
  - A single custom hook (`useRecipes`) for all API interactions.
- **Environment management**: Production and development settings via `.env` files to switch API base URLs.
- **State & performance**:  
  - React’s `useState` and `useEffect` for data fetching and component state.  
  - `useMemo` for wishlist logic, persisting selections in `localStorage` without unnecessary re-renders.


Developed with ❤️ by Luigi Sabbetti