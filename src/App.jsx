import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionCards from './components/SectionCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_10%_10%,#ffffff_0%,#fbf8f5_20%,#eef7ff_40%,#ffffff_60%)] text-slate-900">
      <Navbar />
      <Hero />
      <SectionCards />
      <Footer />
    </div>
  )
}

export default App
