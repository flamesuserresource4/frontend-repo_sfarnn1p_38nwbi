import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionCards from './components/SectionCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,200,150,0.25)_0%,rgba(255,255,255,0)_70%)]">
      <Navbar />
      <Hero />
      <SectionCards />
      <Footer />
    </div>
  )
}

export default App
