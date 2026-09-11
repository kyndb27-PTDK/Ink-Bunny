---
name: WebGL preview fallback
description: Preview environments may lack a usable WebGL context even when Three.js dependencies are installed.
---

The 3D layer must detect WebGL support before mounting a React Three Fiber Canvas and fall back to CSS ambience when unavailable.

**Why:** The Replit preview browser can fail WebGL context creation and surface the Vite runtime overlay, which would obscure an otherwise working page.

**How to apply:** Keep the Three.js scene isolated and lazy-loaded, and make the artwork-led page fully usable without GPU support.