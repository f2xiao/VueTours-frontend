// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#c8b8d9',
            secondary: '#02977c',
            accent: '#f9f1e8',
            error: '#f38daf',
            warning: '#db5852',
            info: '#dbceb2',
            success: '#8ad6d6'
          }
        }
      }
     }
    }
)
