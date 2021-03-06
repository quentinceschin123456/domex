// import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import fr from 'vuetify/src/locale/fr';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
    lang: {
      locales: { fr },
      current: 'fr',
    },
    icons: {
      iconfont: 'md', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
});
