module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#D84727",
        "primary-hover": "#B0361B",
        "ui-01": "#FFFFFF",
        "ui-02": "#FAFAFC",
        "ui-03": "#F0F1F3",
        "ui-04": "#D3D4D8",
        "ui-05": "#A1A4B1",
        "ui-06": "#DFF0EB",
        "ui-07": "#BADFD3",
        "ui-08":
          "linear-gradient(222.9deg, #FFFFFF -119.21%, rgba(255, 255, 255, 0) 75.92%), #DFF0EB",
        "alert-background": "#FCF8E3",
        "text-alert": "#896D3B",
        "text-01": "#313735",
        "text-02": "#505565",
        "text-03": "#8B90A0",
        "text-inverse": "#FFFFFF",
        "brand-01": "#477665",
        "brand-02": "#2878A6",
        "brand-03": "#165D85",
        "brand-04": "#D84727",
        "brand-04-hover": "#B63B20",
        "brand-07": "#BADFD3",
        "row-hover": "#EEEEF1",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "128": "27rem",
      },
      screens: {
        xs: "550px",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
