import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackgroundParticles from './components/BackgroundParticles'

function App() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
