/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#230056",
        secondary: "#40009d",

        black: "#000000",
        black2: "#737373",
        black3: "#464646",
        black4: "#676767",
        black5: "#818181",
        grey: "#eeeeee",
        grey2: "#9c9c9c",
        grey3: "#fbfbfd",
        grey4: "#fff1fe",
        lightGrey: "#EFF3F2",
        lightGrey2: "#f2f2fa",
        lightGrey3: "#f5f7f9",
        bgBlue1: "#230056",
        bgBlue2: "#40009d",
        chatBg: "#6a1bce",
        payBg: "#3c0385",
        chatBg2: "#3172f4",
        chatBg3: "#f3f5f7",
        neon: "#21fdff",
        chatUiBg1: "#eff3ff",
        chatUiBg2: "#c5d1fb",
        yellow: "#fbd852",
        sky: "#acd5f8",
      },
    },
  },
  plugins: [],
};
