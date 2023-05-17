import {createVuetify, ThemeDefinition} from 'vuetify/lib/framework.mjs';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/components';

const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#E8EAF6',
    primary: '#1976D2',
    secondary: '#0F141E',
    tertiary: '#BDBDBD'
  },
};

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'customLightTheme',
      themes: {
        customLightTheme,
      },
    },
  });
  nuxt.vueApp.use(vuetify);
});
