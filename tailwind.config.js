module.exports = {
  purge: [],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        body: "#17171F",
        "selected-text": "#A3A3FF",
        theme: "#3F3FFF",
        nav: "#404053",
        secondary: "#ffffff",
        badge: "#CCCCFF",
        "input-border": "#ffffff",
        primary: "#2A2A35",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      animation: {
        ping: "ping 1s cubic-bezier(0, 0, 2,1) infinite ",
      },
    },
  },
};
