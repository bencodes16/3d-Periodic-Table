# 3D Periodic Table

This project is built using **Three.js** and **React** and allows users to interact with a fully 3D periodic table.

**Try out here!!!** https://zippy-shortbread-2555d0.netlify.app/

## 🔬 Features

- **3D Navigation**: Hover over and move around the periodic table in a 3D environment.
- **Element Boxes**: Each element is represented by a reusable React component, positioned based on a dictionary of element data.
- **Texture Atlas**: An edited image of the periodic table is used as a texture atlas. Only the top surface of each box is textured to optimize performance.
- **Element Details**: Clicking on an element brings up a div with detailed information about it, sourced from the data dictionaries.
- **Mini 3D Atom Viewer**: A mini canvas renders a simplified 3D model of the atom, displaying the nucleus and electron shells.
- **Search Bar**: Users can search for an element by name or symbol. Matching elements will hover to help users find them quickly.

## 🛠️ Tech Stack

- **React**
- **Three.js**
- **Vite**
- **TailwindCSS**

---

# React + Vite Setup

This project uses [Vite](https://vitejs.dev/) for fast development and HMR, with the React plugin enabled.

## Plugins Used

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) – uses [Babel](https://babeljs.io/) for fast refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) – uses [SWC](https://swc.rs/) for faster compilation

## 🔍 ESLint Configuration

To extend this into a production-ready app, consider using **TypeScript** with **type-aware linting**.

- Reference: [React + TypeScript Vite Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
- Tooling: [`typescript-eslint`](https://typescript-eslint.io)

---

## 🚀 Getting Started

To run the project locally:

```bash
npm install
npm run dev
