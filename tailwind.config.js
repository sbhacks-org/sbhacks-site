const assetWidths = {};

function defineAsset(name, widthPx) {
  assetWidths[name] = pxToEm(widthPx);
}

function pxToEm(px) {
  return `${truncateEm(px / 16)}em`;
}

function truncateEm(em) {
  return em.toFixed(3).replace(/\.?0+$/, "");
}

defineAsset("logo_map_cloud", 198);
defineAsset("cloud_front", 180);
defineAsset("cloud_back", 101);
defineAsset("island", 133);
defineAsset("envelope", 114);
defineAsset("wax_seal_submit", 38);
defineAsset("wheel", 27);
defineAsset("anchor", 27);
defineAsset("sailor_otter_telescope", 38);
defineAsset("santa_rosa", 126);

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
          dark2: "#3966a6",
        },
        seafoam: "#ecfff2",
        paper: "#ddcfba",
        brown: {
          200: "#af9d87",
          900: "#4e382c",
        },
        button: {
          red: "#d37676",
          blue: "#316cb0",
        },
      },
      fontFamily: {
        sans: ["'Nexa Bold'"],
      },
      width: {
        ...assetWidths,
      },
    },
  },
};
