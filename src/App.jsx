import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Produto from './pages/Produto'
import Loja from './pages/Loja'
import Orcamento from './pages/Orcamento'
import QuemSomos from './pages/QuemSomos'
import Sustentabilidade from './pages/Sustentabilidade'
import Parceiros from './pages/Parceiros'
import Dashboard from './pages/Dashboard'
import Engenharia from './pages/Engenharia'
import Adm, { AdmGuard } from './pages/Adm'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default function App() {
  const { pathname } = useLocation()
  const isWelcome = pathname === '/'

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/inicio" element={<Layout><Home /></Layout>} />
        <Route path="/produto" element={<Layout><Produto /></Layout>} />
        <Route path="/loja" element={<Layout><Loja /></Layout>} />
        <Route path="/orcamento" element={<Layout><Orcamento /></Layout>} />
        <Route path="/quem-somos" element={<Layout><QuemSomos /></Layout>} />
        <Route path="/sustentabilidade" element={<Layout><Sustentabilidade /></Layout>} />
        <Route path="/parceiros" element={<Layout><Parceiros /></Layout>} />
        <Route path="/adm" element={<Layout><Adm /></Layout>} />
        <Route path="/dashboard" element={<Layout><AdmGuard><Dashboard /></AdmGuard></Layout>} />
        <Route path="/engenharia" element={<Layout><AdmGuard><Engenharia /></AdmGuard></Layout>} />
      </Routes>
    </div>
  )
}
