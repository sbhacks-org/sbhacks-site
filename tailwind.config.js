module.exports = {
  plugins: [
    require("@tailwindcss/ui"),
    require("tailwindcss-blend-mode")(),
    require("tailwindcss-image-rendering")(),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        sea: {
          light: "#32a09d",
          dark: "#2c819e",
        },
        paper: "#ddcfba",
        brown: {
          200: "#af9d87",
          900: "#4e382c",
        },
      },
      fontFamily: {
        sans: ["'Nexa Bold'"],
      },
    },
  },
};
