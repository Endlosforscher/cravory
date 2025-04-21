# Cravory 🍽️  
**Fast and Intuitive Recipes Finder**

Cravory is a recipe finder built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/).  

It offers a lightning-fast developer experience and clean, responsive UI styles thanks to modern frontend tooling.

## 🚀 Features

- ⚛️ Built with React 19 and Vite
- 🎨 Styled with Tailwind CSS 4.1
- 💨 Sass support for theme customizations
- 🧩 PostCSS and Autoprefixer included

## 📦 Tech Stack

- React 19
- Vite 6
- Tailwind CSS 4.1
- Sass
- PostCSS
- Autoprefixer
- TypeScript

## 🛠️ Getting Started

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

By default, this will start json-server at http://localhost:8000.
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

Developed with ❤️ by Luigi Sabbetti