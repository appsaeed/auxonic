const theme = {
  theme: "dark", //dark |light,
  layout: "vertical", // ['horizontal' , 'vertical']
  boxLayout: "full", //boxed , full
  bgSkins: {
    topbar: "skin5",
    layoutSkin: "skin5",
    navbarHeader: "skin5",
    navbarCollapse: "skin5",
    sidebarbg: "skin5",
  },
  sidebarType: window.screen.width < 768 ? "mini-sidebar" : "full", //['full', 'stylish', 'mini-sidebar' , 'iconbar' , 'overlay']
  sidebarPosition: "fixed", // fixed , absolute , relative
  headerPosition: "absolute", // fiexd , absolute , relative
};

export default theme;
