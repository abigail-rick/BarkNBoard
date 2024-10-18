import Navbar from './components/Navbar';
import './App.css';
import Features from './components/features';
import Services from './components/services';
import About from './components/about';
import Pricing from './components/pricing';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Features />
      <Services />
      <Pricing />
      <About />
      <Footer />
    </div>
  );
}

export default App;
