import { NavigationProvider, useNavigation } from './context/NavigationContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { IndustryChainView } from './components/chain/IndustryChainView'
import { DrillDownPanel } from './components/drilldown/DrillDownPanel'

function AppContent() {
  const { state } = useNavigation()

  return (
    <div className="h-screen bg-[#0B0F19] tech-grid animate-grid-drift flex flex-col text-slate-200 overflow-hidden">
      <Header />
      <main className="flex-1 relative overflow-hidden">
        <IndustryChainView />
      </main>
      <Footer />
      <DrillDownPanel path={state.path} />
    </div>
  )
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  )
}

export default App
