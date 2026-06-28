import { NavigationProvider, useNavigation } from './context/NavigationContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { IndustryChainView } from './components/chain/IndustryChainView'
import { DrillDownPanel } from './components/drilldown/DrillDownPanel'

function AppContent() {
  const { state } = useNavigation()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <IndustryChainView />
      </main>
      <Footer />
      {state.path.length > 0 && <DrillDownPanel path={state.path} />}
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
