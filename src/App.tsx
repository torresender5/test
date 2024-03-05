import './App.css'
import { ThemProvider } from './providers/ThemeProvider'
import Layout from './layout/layout'

function App() {
  return (
    <ThemProvider>
        <Layout />
    </ThemProvider>
  )
}

export default App
