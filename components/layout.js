import Link from 'next/link'
import { createGlobalStyle } from 'styled-components'
import Logo from './logo'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f2f2f2;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Logo>
      <Link href='/'>
        <a>CCI</a>
      </Link>
    </Logo>
    {children}
  </div>
)

export default Layout
