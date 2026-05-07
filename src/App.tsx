import Nav from './components/Nav';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <About />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
