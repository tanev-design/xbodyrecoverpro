import { I18nProvider } from './i18n/I18nProvider';
import SmoothScroll from './lib/SmoothScroll';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import CookieBar from './components/CookieBar';

export default function App() {
  return (
    <I18nProvider>
      <SmoothScroll />
      <div className="antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Nav />
        <main id="main">
          <Hero />
          <HowItWorks />
          <Services />
          <About />
          <Team />
          <Testimonials />
          <Pricing />
        </main>
        <Footer />
        <FloatingSocials />
        <CookieBar />
      </div>
    </I18nProvider>
  );
}
