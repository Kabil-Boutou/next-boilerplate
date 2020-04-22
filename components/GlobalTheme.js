import { createGlobalStyle } from 'styled-components'

export const colorTheme = {
    colors: {
        primary: '#c3073f',
        secondary: '#950740',
        tertiary: '#6f2232',
        quaternary: '#4e4e50',
        quinary: '#1a1a1d',
    },
}
export const GlobalTheme = createGlobalStyle`

   * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
    }
    body{
      padding:0;
      margin:0;
    }

`
