#3d Periodic Table
This project made using Three JS and React allows the user to hover and move around a 3d periodic table. The element boxes are a react component, and I have a list of dicitonaires which I map over to create all the seperate boxes with each box having a set position on the page. I use a texture atlas which is simply an edited picture of a periodic table, which I use to allow each box to have the image of the element mapped onto its top surface. I don't map over all surfaces in order to save memory and space. When clicking on an element box, a div appears with information about the element, courtesy of the large array of dictionaries. Also I have a mini canvas on display which shows the 3d structure of the element, with its nucleus and electrons in their seperate electron shells.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
