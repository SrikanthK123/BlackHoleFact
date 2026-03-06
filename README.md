# Cosmic Voyages 🚀

A high-end, immersive space exploration website built with React, Vite, and React Three Fiber.

## 🌌 Tech Stack
- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS (Cosmic Theme)
- **Animations:** Framer Motion (Parallax, Page Transitions)
- **3D Rendering:** @react-three/fiber + @react-three/drei
- **Icons:** Lucide React

## 🚀 Getting Started

1. **Clone the repository** (or use the generated files)
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure
- `/src/components`: UI components (Navbar, Layout, Starfield)
- `/src/pages`: Main application pages (Home, About, Missions, FluidSim)
- `/public/assets`: Generated space images and textures

## 🧪 Simulated 3D Fluid
The `/fluid` page features a custom WebGL shader-based simulation of a black hole accretion disk using 2000+ points and post-processing bloom. To use a custom Blender GLB, simply swap the `FluidMesh` component in `FluidSim.tsx` for the `@react-three/drei` `useGLTF` loader.

---
*Created with ❤️ by Antigravity*
