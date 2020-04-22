import React from 'react'
import { ThemeProvider } from 'styled-components'
import { colorTheme, GlobalTheme } from 'components/GlobalTheme'
import Meta from 'components/Meta'

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={colorTheme}>
            <GlobalTheme />
            <Meta />
            {children}
        </ThemeProvider>
    )
}

export default Layout
