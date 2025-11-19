import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Approach from './components/Approach'
import Cases from './components/Cases'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Approach />
        <Cases />
        <Footer />
      </main>
    </div>
  )
}

export default App
