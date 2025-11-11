import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionCards from './components/SectionCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <Hero />
      <SectionCards />
      <Footer />
    </div>
  )
}

export default App
