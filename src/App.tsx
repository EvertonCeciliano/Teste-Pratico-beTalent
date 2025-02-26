import Header from './components/Header'
import EmployeeTable from './components/EmployeeTable'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <EmployeeTable />
    </ThemeProvider>
  )
}

export default App
