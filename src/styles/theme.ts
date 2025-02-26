export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745'
  },
  fontSize: {
    small: '12px',
    medium: '16px',
    large: '20px'
  }
}

// Criando tipo para o tema
export type Theme = typeof theme;

// Declaração de módulo para o styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
} 