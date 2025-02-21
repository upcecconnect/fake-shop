import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import type { ThemeTypes } from '@/types/ThemeType';

const BLUE_THEME: ThemeTypes = {
  name: 'BLUE_THEME',
  dark: false,
  variables: {
    'border-color': '#e5eaef',
    'border-opacity': 1,
  },
  colors: {
      primary: '#186dde',
      secondary: '#0acc95',
      info: '#7460ee',
      success: '#13DEB9',
      accent: '#fc4b6c',
      warning: '#fec90f',
      error: '#ef5350',
      lightprimary: '#f5fcfd',
      lightsecondary: '#E8F7FF',
      lightsuccess: '#E6FFFA',
      lighterror: '#FDEDE8',
      lightwarning: '#FEF5E5',
      lightinfo:'#EBF3FE',
      textPrimary: '#2A3547',
      textSecondary: '#2A3547',   
      borderColor: '#e5eaef',
      inputBorder: '#6680ad',
      containerBg: '#ffffff',
      background: '#ffffff',
      hoverColor: '#f6f9fc',
      surface: '#f4f6f9',
      'on-surface-variant': '#fff',
      grey100: '#F2F6FA',
      grey200: '#EAEFF4',
      muted:'#1d2228',
      borderline:'#1d1d1d'
  }
};


export default createVuetify({
    theme: {
        defaultTheme: 'BLUE_THEME',
        themes: {
            BLUE_THEME,
        }
    },
    defaults: {
        VCard: {
          rounded: 'md'
        },
        VTextField: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VTextarea: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VSelect: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VListItem: {
            minHeight: '45px'
        },
        VTooltip: {
            location: 'top'
        }
    }
});
