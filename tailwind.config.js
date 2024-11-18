module.exports = {
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#06114d",
          "secondary": "#4b5784",
          "accent": "#d06516",
          "neutral": "#2a323c",
          "base-100": "#ffffff",
          "info": "#0097d1",
          "success": "#009d5f",
          "warning": "#ffbe32",
          "error": "#dc2642",
        }
      }
    ]
  }
};