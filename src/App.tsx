import { Main , About, FirstBanner, Assortment, SecondBanner, Footer} from '../shared/components';
import { StickyHead } from '../shared/ui';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import WhatsAppPage from '../src/whatsapp/WhatsAppPage'; // Импортируйте новый компонент

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatsapp" element={<WhatsAppPage />} />
      </Routes>
    </Router>
  );
}
const Home = () => (
    <div className="container">
      <StickyHead />
      <Main />
      <About />
      <FirstBanner />
      <Assortment />
      <SecondBanner />
      <Footer />
    </div>
 )


export default App
