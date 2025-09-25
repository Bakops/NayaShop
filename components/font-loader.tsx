"use client";

import { useEffect } from "react";

export function FontLoader() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @font-face {
        font-family: 'Zooja';
        src: url('/fonts/Zooja-Pro/Zooja-Pro.woff2') format('woff2'),
             url('/fonts/Zooja-Pro/Zooja-Pro.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      
      
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
